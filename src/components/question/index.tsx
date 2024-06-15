import { FC, useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import { IQuestion, QuestionType, evaluateConstraints } from '../../utils';
import Input from 'antd/es/input/Input';

export interface QuestionProps {
  question: IQuestion;
  onNext: (question: { question: IQuestion, nextQuestionId: string }) => void;
  backButtonEnabled: boolean;
  onBack: (currentQuestion: IQuestion) => void;
}

/**
 * This component can be further broken down into dumb stateless components for different types.
 * just doing all the things here for now
 */
export const Question: FC<QuestionProps> = ({ question, backButtonEnabled, onNext, onBack }) => {
  const [answer, setAnswer] = useState<QuestionType>(question.answer || '');

  const onAnswer = (answer: QuestionType): void => {
    setAnswer(answer);
  }

  useEffect(
    () => {
      setAnswer(question.answer === undefined ? '' : question.answer);
    },
    [question]
  )

  const onSubmit = (): void => {
    const isValidAnswer = evaluateConstraints(question.constraintSuccess, answer);
    console.log(isValidAnswer);

    onNext({
      question: {
        ...question,
        answer: answer === undefined ? '' : answer
      },
      nextQuestionId: isValidAnswer ? question.onSuccessNextQuestionId : question.onFailureNextQuestionId
    });

    setAnswer('');
  }

  return (
    <Card title={
      <div className='flex justify-between'>
        <div>
          {question.title}
        </div>
        {
          backButtonEnabled &&
          <div>
            <Button size='small' onClick={() => onBack(question)} type='link'>Back</Button>
          </div>
        }
      </div>

    } bordered={true}>
      <div className='flex justify-center'>
        {
          question.type === 'boolean' ?
            <>
              <Button onClick={() => onAnswer(true)} type='primary'>Yes</Button>
              <Button onClick={() => onAnswer(false)} className='ml-5'>No</Button>
            </>
            :
            question.type === 'number' ?
              <>
                <Input defaultValue={(question.answer as string)} type='number' onChange={(event) => onAnswer(event.target.value)} />
              </>
              :
              question.type === 'string' ?
                <>
                  <Input onChange={(event) => onAnswer(event.target.value)} />
                </>
                :
                null
        }
      </div>
      <div className='mt-5 flex justify-center'>
        <div>
          {
            answer !== '' &&
            <>
              Selected Answer:
              <strong>
                {
                  typeof answer === 'boolean' ?
                    answer === true ? 'Yes' : 'No'
                    : answer
                }
              </strong>
              <div>
                <Button onClick={() => onSubmit()} >Next</Button>
              </div>
            </>
          }
        </div>
      </div>
    </Card>
  )
};
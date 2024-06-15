import { FC, useEffect, useState } from 'react';
import { Question, Summary } from './components';
import { IQuestion } from './utils/question';
import { getQuestions } from './services/question';
import { Card } from 'antd';

const QUESTIONS_NULL_STATE_ID = '-1';

const App: FC = () => {
  const [questionsRaw, setQuestionsRaw] = useState<Record<string, IQuestion>>({});
  const [currentQuestionId, setCurrentQuestionId] = useState<string>(QUESTIONS_NULL_STATE_ID);
  const [history, setHistory] = useState<Record<string, IQuestion>>({});
  const [historyIds, setHistoryIds] = useState<string[]>([]); // simply using it as a stack for history. LIFO

  const addQuestionToHistory = (question: IQuestion, nextQuestionId: string): void => {
    setHistory({
      ...history,
      [question.id]: question
    });

    setHistoryIds([...historyIds, question.id]);
    setCurrentQuestionId(nextQuestionId);
  }

  const onBackEvent = (currentQuestion: IQuestion) => {
    const id = historyIds.pop();

    if (id)
      setCurrentQuestionId(id);

    delete history[currentQuestion.id];
    setHistory(history);
  }

  useEffect(
    () => {
      getQuestions().then(
        (data) => {
          setQuestionsRaw(data);

          if (Object.keys(data).length)
            setCurrentQuestionId(Object.keys(data)[0]); // set first item key
        }
      )
    },
    []
  )

  return (
    <div className='mx-auto p-5 w-50'>
      <div>
        {
          !Object.keys(questionsRaw).length ? <Card title={'No questions'}>
            <p>There are no questions at the moment.</p>
          </Card>
            :
            currentQuestionId !== QUESTIONS_NULL_STATE_ID &&
            <Question
              question={history[currentQuestionId] || questionsRaw[currentQuestionId]} // history item takes precedence
              onNext={({ question, nextQuestionId }) => addQuestionToHistory(question, nextQuestionId)}
              backButtonEnabled={historyIds.length > 0}
              onBack={(currentQuestion) => onBackEvent(currentQuestion)}
            />
        }

      </div>
      {
        Object.values(history).length ?
          <div className='mt-5'>
            <Summary endState={currentQuestionId === QUESTIONS_NULL_STATE_ID} questions={Object.values(history)} />
          </div>
          : null
      }
    </div>
  );
};

export default App;

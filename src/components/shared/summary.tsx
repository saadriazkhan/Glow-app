import React from 'react';
import { Card } from 'antd';
import { IQuestion } from '../../utils';

interface SummaryProps {
    questions: IQuestion[];
    endState: boolean;
}

export const Summary: React.FC<SummaryProps> = ({ questions, endState }) => {
    return (
        <Card title={endState ? 'Thank you for filling in the form!' : 'History'}>
            {
                questions.map(
                    (question, index) => {
                        return (
                            <div key={index}>
                                {index + 1}: {question.title}
                                <strong className='ml-5'>
                                    {
                                        typeof question.answer === 'boolean' ?
                                            question.answer === true ? 'Yes' : 'No'
                                            : question.answer
                                    }
                                </strong>
                            </div>
                        )
                    }
                )
            }
        </Card>
    );
};
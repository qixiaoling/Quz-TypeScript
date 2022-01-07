
import React from 'react';


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;

    questionNr: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
                                           question,
                                           answers,
                                           callback,

                                           questionNr,
                                           totalQuestions,
                                       }) => (
    <div>
        <p className='number'>
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />

    </div>
);

export default QuestionCard;
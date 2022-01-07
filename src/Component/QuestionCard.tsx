import React from 'react';
type Props ={
    question: string;
    answers : string[];
    questionNr : number;
    callBack : (e: any) => void;
    total_questions : number;
    userAnswers : any;
}
const QuestionCard: React.FC<Props> = ({
                                           question,
                                           answers,
                                           questionNr,
                                           callBack,
                                           total_questions,
                                           userAnswers}) =>{
    return(
        <div>
            <h3>Question : {questionNr} / {total_questions}</h3>
            <p>{question}</p>
            {answers.map((answer) =>{
                return(
                    <button onClick={callBack}>
                        {answer}
                    </button>
                )
            })}
        </div>

    )
}
export default QuestionCard;
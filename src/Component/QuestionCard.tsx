import React from 'react';
import {AnswerObject} from "../App";
type Props ={
    question: string;
    answers : string[];
    questionNr : number;
    callBack : (e: any) => void;
    total_questions : number;
    userAnswer : AnswerObject | undefined;
}
const QuestionCard: React.FC<Props> = ({
                                           question,
                                           answers,
                                           questionNr,
                                           callBack,
                                           total_questions,
                                           userAnswer}) =>{
    return(
        <div>
            <h3>Question : {questionNr} / {total_questions}</h3>
            <p dangerouslySetInnerHTML={{__html:question}}/>
            {answers.map((answer) =>{
                return(
                    <button onClick={callBack} value={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                )
            })}
        </div>

    )
}
export default QuestionCard;
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
                    <button  disabled={userAnswer? true : false} onClick={callBack} value={answer} key={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                )
            })}
        </div>

    )
}
export default QuestionCard;
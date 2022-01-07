import React from 'react';
import {AnswerObject} from "../App";
import {ButtonWrapper, CardWrapper} from "./QuestionCard.style";

type Props = {
    question: string;
    answers: string[];
    questionNr: number;
    callBack: (e: any) => void;
    total_questions: number;
    userAnswer: AnswerObject | undefined;
}
const QuestionCard: React.FC<Props> = ({
                                           question,
                                           answers,
                                           questionNr,
                                           callBack,
                                           total_questions,
                                           userAnswer
                                       }) => {
    return (
        <CardWrapper>
            <h3>Question : {questionNr} / {total_questions}</h3>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            {answers.map((answer) => {
                return (
                    <ButtonWrapper>
                        <button disabled={userAnswer ? true : false} onClick={callBack} value={answer} key={answer}
                            className="btn answer-btn"
                        >
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </ButtonWrapper>
                )
            })}
        </CardWrapper>

    )
}
export default QuestionCard;
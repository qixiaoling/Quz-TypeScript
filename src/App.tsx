import React, {useState} from 'react';
import {shuffleArray} from "./Utility/Util";
import QuestionCard from "./Component/QuestionCard";

export type AnswerObject = {
    question : string;
    answerFromUser: string;
    correct: boolean;
    correct_answer: string;

}
const TOTAL_QUESTIONS = 10;
type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}
type QuestionsState = Question & { answers: string[] };

enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

const fetchData = async (): Promise<QuestionsState[]> => {

    const endpoint = `https://opentdb.com/api.php?amount=${TOTAL_QUESTIONS}&difficulty=${Difficulty.EASY}&type=multiple`
    const fetchedData = fetch(endpoint)
        .then((res) => res.json())
        .then((res) => {
            return res.results.map((resItem: Question) => ({
                    ...resItem,
                    answers: shuffleArray([...resItem.incorrect_answers, resItem.correct_answer])
                })// console.log(questions);//You cannot see the updated state!!!you can see it if you call the async funciton
                // again, but what it will show is the old data.
            )

            //below is the axios way, both fetch and axios cannot see updated state in this api call function!!!
            // const receivedData = await axios.get(endpoint);
            // console.log(receivedData.data.results);
            // setQuestions(receivedData.data.results);
            // console.log(questions);//You cannot see the updated state!!!


        })
    return fetchedData;
}

const App: React.FC = () => {
    const [questions, setQuestions] = useState<QuestionsState[]>([]);
    const [loading, setLoading] = useState(false);
    const [gameOver, setGameOver] = useState(true);
    const [score, setScore] = useState(0);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false)
        const data = await fetchData();
        setQuestions(data);
        setScore(0);
        setNumber(0);
        setUserAnswers([]);
        setLoading(false);
    }
    const nextQuestion = () => {
        const nextQ = number + 1;
        if(nextQ > TOTAL_QUESTIONS-1) {
            setGameOver(true)
        }else {
            setNumber(nextQ);
        }

    }
    const checkAnswer = (e:any) => {
        if(!gameOver) {
            const answerFromUser = e.target.value;
            const correct = questions[number].correct_answer === answerFromUser;
            if(correct) {
               setScore((prevState)=> prevState + 1);
            }
            const userAnswerObject = {
                question: questions[number].question,
                correct_answer : questions[number].correct_answer,
                answerFromUser: answerFromUser,
                correct: correct,
            }
            setUserAnswers((prev)=>[...prev, userAnswerObject])
        }

    }


    return (
        <>
            <div>
                <h1>REACT QUIZ</h1>
                {gameOver ? (<button onClick={startTrivia}>start</button>) : null}
                {!gameOver ? (<p>Score : {score}</p>) : null}
                {!loading && !gameOver && (
                    <QuestionCard
                        question={questions[number].question}
                        answers={questions[number].answers}
                        questionNr={number + 1}
                        callBack={checkAnswer}
                        total_questions={TOTAL_QUESTIONS}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
                    />
                )}
                {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?
                    (
                        <button onClick={nextQuestion}>Next Question</button>
                    ) : null}
            </div>
        </>
    );
};

export default App;
import React from 'react';
import {shuffleArray} from "./Utility/Util";


export type Question = {
    category: string;
    correct_answer:string;
    difficulty: string;
    incorrect_answers : string[];
    question: string;
    type:string;
}
export type QuestionsState = Question & {answers : string[]};
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}
// export const fetchData = async ():Promise<QuestionState[]>  => {
//
//     const endpoint = `https://opentdb.com/api.php?amount=${TOTAL_QUESTIONS}&difficulty=${Difficulty.EASY}&type=multiple`
//     // const fetchedData = fetch(endpoint)
//     //     .then((res) => res.json())
//     //     .then((res) => {
//     //         return res.results.map((resItem: Question) => ({
//     //                 ...resItem,
//     //                 answers: shuffleArray([...resItem.incorrect_answers, resItem.correct_answer])
//     //             })// console.log(questions);//You cannot see the updated state!!!you can see it if you call the async funciton
//     //             // again, but what it will show is the old data.
//     //         )
//     //
//     //         //below is the axios way, both fetch and axios cannot see updated state in this api call function!!!
//     //         // const receivedData = await axios.get(endpoint);
//     //         // console.log(receivedData.data.results);
//     //         // setQuestions(receivedData.data.results);
//     //         // console.log(questions);//You cannot see the updated state!!!
//     //
//     //
//     //     })
//     // return fetchedData;
//     const data = await (await fetch(endpoint)).json();
//     return data.results.map((question: Question) => ({
//         ...question,
//         answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
//     }))
// }
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
};
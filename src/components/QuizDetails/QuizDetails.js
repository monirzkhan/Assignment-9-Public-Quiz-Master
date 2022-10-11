import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const { name } = quiz.data;
    const questions = quiz.data.questions;
    
    return (
        <div>
            <h1>Quiz of {name}</h1>
            <div>
                {
                    questions.map(quiz =><Questions
                        key={quiz.id}
                        quiz={quiz}
                    ></Questions>)
}
            </div>
        </div>
    );
};

export default QuizDetails;
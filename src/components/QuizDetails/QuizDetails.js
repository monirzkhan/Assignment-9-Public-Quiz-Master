import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const { name } = quiz.data;
    const questions = quiz.data.questions;
    
    return (
        <div className='mx-auto'>
            <h1 className='text-4xl text-green-400 my-4 text-center'>Quiz of {name}</h1>
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
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const { name } = quiz.data;
    const questions = quiz.data.questions;
    
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold text-green-600 my-4 text-center btn btn-outline btn-accent'>Quiz of {name}</h1>
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
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
    const [showAnswer, setShowAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const quiz = useLoaderData();
    const { name } = quiz.data;
    const questions = quiz.data.questions;
    
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold text-green-600 my-4 text-center btn btn-outline btn-accent '>Quiz of {name}</h1>
            <div className='text-right'>
                <p className='mr-12 px-12 py-4 mb-4 btn btn-outline btn-success'>Right Answer: {showAnswer} </p> <br /> 
                <p className=' mr-12 px-12 py-4 btn btn-outline btn-error'>Wrong Answer: {wrongAnswer} </p>
            </div>
            <div>
                {
                    questions.map(quiz =><Questions
                        key={quiz.id}
                        quiz={quiz}
                        setShowAnswer={setShowAnswer}
                        showAnswer={showAnswer}
                        wrongAnswer={wrongAnswer}
                        setWrongAnswer={setWrongAnswer}
                    ></Questions>)
}
            </div>
        </div>
    );
};

export default QuizDetails;
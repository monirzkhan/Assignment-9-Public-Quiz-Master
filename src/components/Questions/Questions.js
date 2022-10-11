import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import QuizAnswers from '../QuizAnswers/QuizAnswers';

const Questions = ({quiz}) => {
    
    const { id, options, question, correctAnswer } = quiz;
    const handleGetAnswer = option => {
        if (option === correctAnswer) {
            alert('success')
        }
        else {
            alert('wrong Answer')
        }
    }
    

    return (
        <div className='m-12 p-8 bg-blue-200 rounded '>
            <div className='flex justify-between'>
                <h1>Quiz  : {question}</h1> 
                <EyeIcon className='w-6 h-6'></EyeIcon>
            </div>
            <div>
                {
                    options.map(option => <button
                        className='block p-4 bg-gray-400 border rounded m-4'
                        onClick={() => handleGetAnswer(option)}
                    >{option}</button>)
                }
            </div>

        </div>
    );
};

export default Questions;
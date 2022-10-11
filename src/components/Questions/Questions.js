import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const Questions = ({quiz}) => {
    
    const { id, options, question, correctAnswer } = quiz;
    
    return (
        <div className='m-12 p-8 bg-blue-200 rounded '>
            <div className='flex justify-between'>
                <h1>Quiz  : {question}</h1> 
                <EyeIcon className='w-6 h-6'></EyeIcon>
            </div>
            <div>
                {
                    options.map(option => <p>{ option}</p>)
                }
            </div>

        </div>
    );
};

export default Questions;
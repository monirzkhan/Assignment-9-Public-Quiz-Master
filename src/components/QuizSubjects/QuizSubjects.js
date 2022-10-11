import React from 'react';
import { Link } from 'react-router-dom';

const QuizSubjects = ({ subject }) => {
    const { id, name, logo, total } = subject;
    return (
        <div className='border m-4 p-4 bg-yellow-200 rounded shadow  '>
            <img src={logo} className=' w-full mx-auto mb-4' alt="" />
            <div className='flex justify-between items-center mb-4'>
                <h3 className='text-3xl fw-bold text-gray-600'>{name}</h3>
                <p className='text-lg text-blue-400'>Total Quiz: {total}</p>
            </div>
            <Link to={`/quiz/${id}`}>
                <button className='w-full p-4 bg-yellow-400 text-gray-600 text-xl hover:bg-white hover:text-black'>Start Quiz</button>
            </Link>
        </div>
    );
};

export default QuizSubjects;
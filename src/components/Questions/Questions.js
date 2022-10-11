import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import QuizAnswers from '../QuizAnswers/QuizAnswers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ quiz }) => {
    const { id, options, question, correctAnswer } = quiz;
    const [showAnswer, setShowAnswer] = useState(false);
    const notifyRight = () => toast.success('🦄 Correct Answer!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notifyWrong = () => toast.error('Oh! Wrong Answer', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const showAnswerIcon = () => toast.success(correctAnswer, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const handleGetAnswer = option => {
        if (option === correctAnswer) {
            notifyRight();
        }
        else {
            notifyWrong()
        }
    }


    return (
        <div className='m-12 p-8 bg-gray-200 rounded-xl '>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className='flex justify-between'>
                <h1 className='md:text-4xl text-indigo-400 text-center md:p-4 md:m-4'>Quiz  : {question}</h1>

                <div className=' md:w-8 w-12 md:h-8 h-12  hover:text-green-700'>
                     <EyeIcon onClick={showAnswerIcon}></EyeIcon> 
                </div>

            </div>
            <div className='grid md:grid-cols-2'>
                {
                    options.map(option => <button
                        className='block btn btn-active hover:bg-yellow-200 btn-warning text-black m-4'
                        onClick={() => handleGetAnswer(option)}
                    >{option}</button>)
                }
            </div>
            

        </div>
    );
};

export default Questions;
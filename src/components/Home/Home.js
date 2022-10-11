import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import QuizSubjects from '../QuizSubjects/QuizSubjects';

const Home = () => {
    const quizSubject = useLoaderData();
    console.log(quizSubject.data);
    return (
        <div>
            <Banner></Banner>
            <div className='grid md:grid-cols-4 grid-cols-1  gap-4 my-12  bg-blue-200 shadow-lg '>
                {
                    quizSubject.data.map(subject => <QuizSubjects
                        key={subject.id}
                        subject={subject}
                    ></QuizSubjects>)
                }
            </div>
            
        </div>
    );
};

export default Home;
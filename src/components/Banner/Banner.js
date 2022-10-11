import React from 'react';
import BannerImage from '../../images/benner.jpg'


const Banner = () => {
    return (
        <div className='relative mt-[30%] md:mt-[0]'>
            <img src={BannerImage} alt="" className='' />
            <h className='font-serif absolute md:top-[40%] top-[30%] md:right-[20%] right-[15%] text-white md:text-5xl text-base'>
                “Brainstorming is <br />
                the nexus of ideas.” <br /> <br />
            </h>
            <small className='absolute md:bottom-[10%] bottom-[10%] md:right-[20%] right-[10%] md:text-3xl text-xs text-yellow-400'><i>Imagination is the beginning of creation.</i></small>
        </div>
    );
};

export default Banner;
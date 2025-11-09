import React from 'react';
import leftBg from '../../assets/vector1.png'
import rightBg from '../../assets/vector2.png'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 max-w-[1440px] mx-auto mt-12'>
            <div className='left'>
                <div className='relative'>
                    <div className=' flex gap-20 bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-xl'>
                        <img src={leftBg} alt="" />
                        <img className='hidden md:block' src={rightBg} alt="" />
                    </div>
                    <div className='absolute top-[100px] left-[300px] block md:items-center'>
                        <h2 className='text-2xl'>In-Progress</h2>
                        <p className='text-5xl font-bold text-center mt-4'>0</p>
                    </div>
                </div>
                
            </div>
            <div className='right relative'>
                <div className=' flex gap-20 bg-linear-to-r from-[#54CF68] to-[#00827A] rounded-xl'>
                    <img src={leftBg} alt="" />
                    <img className='hidden md:block' src={rightBg} alt="" />
                </div>
                <div className='absolute top-[100px] left-[300px]'>
                    <h2 className='text-2xl'>Resolved</h2>
                    <p className='text-5xl font-bold text-center mt-4'>0</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
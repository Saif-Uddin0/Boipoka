import React from 'react';
import BookImg from '../../assets/books.jpg'


const Banner = () => {
    return (
        <div className=' bg-white m-10 mx-auto container p-10 lg:p-20'>
            <div className='flex flex-col md:flex-row justify-around items-center  bg-gray-100  gap-5 rounded-xl p-7'>
            <div className='space-y-6'>
                <h1 className='text-5xl font-semibold'>Books to freshen up your <br /> bookshelf</h1>
                <a className="btn bg-green-500 text-white border-none rounded-md">View The List</a>
            </div>
            <div className='p-3 md:p-10'>
                <img className='rounded-md' src={BookImg} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;
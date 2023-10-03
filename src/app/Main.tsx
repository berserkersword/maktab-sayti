import React from 'react'
import Image from 'next/image'
import MainImage from '../assets/none.png'
const Main = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 min-h-[100vh]'>
            {/*                          MAIN TEXT                              */}
            <div className='w-full min-h-[100vh] flex flex-col justify-center px-20'>
                <h1 className='text-7xl text-white font-bold montsterrat text-center sm:text-start'>
                    HIGH QUALITY <br />
                    COURSES
                </h1>
                <h3 className='monterras text-2xl font-light text-white mt-8'>
                    Find the right instructor for you from over <br /> 10,000 teachers
                </h3>
                <div className='mt-6'>
                    <button className="bg-transparent montsterrat text-white py-3 px-8 border border-[#e74040] hover:border-[#e78b40] rounded">
                        Learn more
                    </button>
                </div>
            </div>
            {/*                         MAIN IMAGE                               */}
            <div className='w-full min-h-[100vh] flex items-center justify-center'>
                <Image src={MainImage} width={1000} height={1000} alt='asdas' />
            </div>
        </div>
    )
}

export default Main
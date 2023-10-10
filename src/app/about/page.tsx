"use client"
import Navbar from '@/components/Navbar'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
// import { useRouter } from 'next/router';


const About = () => {

    const data = {
        menuNum: 2
    }
    return (
        <>
            <Navbar data={data} />
            <div
                style={{ minHeight: '100vh' }}>
                <div className='w-full flex items-center justify-center min-h-[50vh]'>
                    <h1 className='dela-gothic text-white text-4xl '>
                        Odob-axloq qoidalari
                    </h1>
                </div>

                {/* // ?                            Cards                        */}
                <div className='flex items-center justify-around md:flex-row sm:flex-col sm:gap-5'>
                    <button
                        className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in
                            reverse chronological order.
                        </p>
                    </button>

                    <a
                        className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow "
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in
                            reverse chronological order.
                        </p>
                    </a>

                </div>
            </div>
        </>
    )
}

export default About
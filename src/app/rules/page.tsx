"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const About = () => {

    const data = {
        menuNum: 2
    }
    return (
        <>
            <Navbar data={data} />
            <div
                style={{ minHeight: '100vh' }}>
                <div className='w-full flex items-center justify-center min-h-[50vh] '>
                    <h1 className='dela-gothic text-white text-4xl '>
                        Odob-axloq qoidalari
                    </h1>
                </div>

                {/* // ?                            Cards                        */}
                <div className='flex items-center justify-around md:flex-row sm:flex-col sm:gap-5'>
                    <a
                        href='https://maktab.uz/img/439dce7f77fc0585a48a2ae848c59357.pdf'
                        target={'_blank'}
                        className="block max-w-sm p-6  border border-gray-200 rounded-lg transition-all ease-in-out delay-500 shadow-inner hover:shadow-2xl card"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in
                            reverse chronological order.
                        </p>
                    </a>

                    <a
                        href='https://maktab.uz/img/83ecb21cb19225aa785c34df592ae743.m4v'
                        target={'_blank'}
                        className="block max-w-sm p-6  border border-gray-200 rounded-lg transition-all ease-in-out delay-500 shadow-inner hover:shadow-2xl card"
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
                <Footer />
            </div>
        </>
    )
}

export default About
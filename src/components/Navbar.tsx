import React from 'react'
import Link from 'next/link'

interface NavData {
    menuNum: number
}

const Navbar = ({ data }: { data: NavData }) => {

    return (

        <nav className="fixed w-full z-20 top-0 left-0  ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between backdrop-blur-lg mx-auto p-4 shadow-lg rounded">
                <Link href="/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap montserrat text-white hover:text-[#e78b40]">455-maktab</span>
                </Link>
                <div className="flex md:order-2">
                    <Link href={'/auth'} type="button" className="text-white bg-[#e74040] hover:bg-[#e78b40] transition-colors ease-in-out montserrat rounded-lg text-md uppercase px-8 py-4 text-center mr-3 md:mr-0 ">Join</Link>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 text-white montserrat border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
                        <li>
                            <Link href="/" className={`sblock py-2 pl-3 pr-4 md:p-0  ${data.menuNum == 1 ? 'text-[#e74040]' : 'text-white'} glow-sm`} aria-current="page">Asosiy</Link>
                        </li>
                        <li>
                            <Link href="/rules" className={`block py-2 pl-3 pr-4 rounded transition md:p-0 ${data.menuNum == 2 ? 'text-[#e74040]' : 'text-white'} glow-sm`}>Odob Axloq qoidalari</Link>
                        </li>
                        <li>
                            <Link href="/about" className={`block py-2 pl-3 pr-4 rounded  md:p-0 ${data.menuNum == 3 ? 'text-[#e74040]' : 'text-white'} glow-sm`}>Biz haqimizda</Link>
                        </li>
                        <li>
                            <Link href="/help" className={`block py-2 pl-3 pr-4 rounded  md:p-0 ${data.menuNum == 4 ? 'text-[#e74040]' : 'text-white'} glow-sm`}>Yordam</Link>
                        </li>
                        <li>
                            <Link href="/" className={`block py-2 pl-3 pr-4 rounded  md:p-0 ${data.menuNum == 5 ? 'text-[#e74040]' : 'text-white'} glow-sm`}>FAQ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
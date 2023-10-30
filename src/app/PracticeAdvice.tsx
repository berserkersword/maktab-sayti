import TechCard from '@/components/Tech.card'
import React from 'react'
import Tech1 from '../assets/teacher1.jpeg';
import Tech2 from '../assets/teacher2.png';
import Tech3 from '../assets/teacher3.png';

const PracticeAdvice = () => {
    return (
        <div className='w-full  lg:px-[8rem] sm:px-10 mt-10'>
            <h1 className='text-3xl text-white font-bold montsterrat text-center sm:text-start'>
                GET QUALITY EDUCATION
            </h1>
            <h3 className='monterras text-lg font-light text-white my-8'>
                Problems trying to resolve the conflict between
                the<br /> two major realms of Classical physics:
                Newtonian mechanics
            </h3>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1  gap-6 '>
                <TechCard image={Tech1} subject='math' name='Eshmamatova' />
                <TechCard image={Tech2} subject='gym' name='Eshmamatova' />
                <TechCard image={Tech3} subject='biology' name='Eshmamatova' />
            </div>
        </div>
    )
}

export default PracticeAdvice
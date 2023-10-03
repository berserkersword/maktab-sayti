import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Image, { StaticImageData } from 'next/image'
import '../styles/Teach.card.css';

const TechCard = ({ image, name, subject }: { image: StaticImageData, name: string, subject: string }) => {
    return (
        <div className='flex flex-col items-center px-10 py-8 gap-4 bg-white tech-card'>
            {/*                 Stars                                   */}
            <div className='flex stars'>
                <AiFillStar color='#ffff00' />
                <AiFillStar color='#ffff00' />
                <AiFillStar color='#ffff00' />
                <AiFillStar color='#ffff00' />
                <AiFillStar color='#ffff00' />
            </div>
            {/*                 teachers Deskription                    */}
            <div className='px-10'>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae soluta odio aut voluptatum, inventore iste
                </h2>
            </div>
            {/*                 teacher profile                          */}
            <div className='flex flex-row gap-6'>
                <Image src={image} alt='asdads' width={50} height={50} style={{ borderRadius: '50%' }} />
                <div>
                    <h1 className='text-[#8D5CF6] montsterrat font-bold'> {name}</h1>
                    <h3 className='text-gray-800 text-sm font-semibold'>{subject}</h3>
                </div>
            </div>
        </div>
    )
}

export default TechCard
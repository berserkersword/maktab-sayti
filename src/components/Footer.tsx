import React from 'react'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr'


const Footer = () => {
    return (
        <div className='w-full px-[9rem]'>
            {/*                         Main Footer                  */}
            <div className='container'>
                <div className="grid grid-rows-3 grid-flow-col">
                    <div className='flex'>
                        {/* phone */}
                        <AiOutlinePhone />
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            {/*                         secondary Footer                  */}
            <div>

            </div>
        </div>
    )
}

export default Footer
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div className='min-h-[100vh]'>
            <Navbar data={{ menuNum: 4 }} />
        </div>
    )
}

export default page
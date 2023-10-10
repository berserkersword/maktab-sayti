'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { AnimatePresence } from 'framer-motion'
import Main from './Main'
import Watch from './min.video'
import PracticeAdvice from './PracticeAdvice'

const NavData = {
  menuNum: 1
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <AnimatePresence mode='wait'>
        <Navbar data={NavData} />
        <Main />
        <Watch />
        <PracticeAdvice />
        <Footer />
      </AnimatePresence>
    </main>
  )
}

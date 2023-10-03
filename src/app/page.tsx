import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Main from './Main'
import Watch from './min.video'
import PracticeAdvice from './PracticeAdvice'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Navbar />
      <Main />
      <Watch />
      <PracticeAdvice />
      <Footer />
    </main>
  )
}

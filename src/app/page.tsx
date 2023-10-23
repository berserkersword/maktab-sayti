'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { AnimatePresence } from 'framer-motion'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Main from './Main'
import Watch from './min.video'
import PracticeAdvice from './PracticeAdvice'
import { createContext, SetStateAction, useState, Dispatch } from 'react'
import { User } from 'firebase/auth'
import { userModel } from '@/Models/Teacher.model'

const NavData = {
  menuNum: 1
}

// export const UserContext = createContext<userModel | null>({
//   user: {
//     isAnonymous: false,
//     emailVerified: false,
//     metadata: {
//       creationTime: '',
//       lastSignInTime: ''
//     },
//     providerData: [
//       {
//         displayName: '',
//         email: '',
//         phoneNumber: '',
//         photoURL: '',
//         providerId: '',
//         uid: ''
//       }
//     ],
//     refreshToken:'',
//     tenantId: '',
//     delete
//   }
// })

export default function Home() {

  const [user, setUser] = useState<User>()

  return (
    <main className="flex flex-col items-center justify-between ">
      <AnimatePresence mode='wait'>
        {/* <UserContext.Provider value={{ user, setUser }}> */}
        <Navbar data={NavData} />
        <Main />
        <Watch />
        <PracticeAdvice />
        <ToastContainer />
        <Footer />
        {/* </UserContext.Provider> */}
      </AnimatePresence>
    </main>
  )
}

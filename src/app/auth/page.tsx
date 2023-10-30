'use client'
import Navbar from '@/components/Navbar';
import { checkLogInDisables, checkSignDisables, signup } from '@/middlewares/Auth.mid';
import { useContext, useState } from 'react'
import './auth.min.css';
// import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User, } from 'firebase/auth';
import { auth } from '@/firebase/firebase.conf';

const Auth = () => {
    const [logUserName, setlogUserName] = useState('');
    const [logPassword, setlogPassword] = useState('');
    const [signUserName, setsignUserName] = useState('')
    const [signEmail, setsignEmail] = useState('')
    const [signPassword, setsignPassword] = useState('');
    const [user, setUser] = useState<User | null>()
    // const router = useRouter();

    onAuthStateChanged(auth, (changedUser) => {
        setUser(changedUser)
    })


    const SignIn = async () => {
        try {
            const user = await signup({ email: signEmail, password: signPassword });
            if (user === undefined) {
                console.log('auth error');
            }
            else {
                // router.push('/')
            }
        } catch (err) {
            console.log(err);
        }
    }




    return (
        <div className='min-h-[100vh] auth-body'>
            <Navbar data={{ menuNum: 7 }} />
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                {/*                         ******* Sign up *******              */}
                <div className="signup">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">
                            Sign up
                        </label>
                        <input className='text-[#eee] font-dela-gothic' value={signUserName} onChange={(e) => { setsignUserName(e.target.value) }} type="text" name="txt" placeholder="User name" />
                        <input className='text-[#eee] font-dela-gothic' value={signEmail} onChange={(e) => { setsignEmail(e.target.value) }} type="email" name="email" placeholder="Email" />
                        <input className='text-[#eee] font-dela-gothic' value={signPassword} onChange={(e) => { setsignPassword(e.target.value) }} type="password" name="pswd" placeholder="Password" />
                        <button
                            onClick={(e) => { SignIn(); e.preventDefault() }}
                            disabled={!checkSignDisables({ userName: signUserName, password: signPassword, email: signEmail })}
                            className={`${checkSignDisables({ userName: signUserName, password: signPassword, email: signEmail }) ? 'glow-on-hover auth-button' : 'glow-button opacity-30 !cursor-not-allowed auth-button'}`}>
                            Sign up
                        </button>
                    </form>
                </div>


                {/*                         ******* Login *******              */}
                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">
                            Login
                        </label>
                        <input className='text-[#33333391] font-dela-gothic' type="text" name="text" value={logUserName} onChange={(e) => { setlogUserName(e.target.value) }} placeholder="Email" />
                        <input className='text-[#33333391] font-dela-gothic' type="password" name="pswd" value={logPassword} onChange={(e) => { setlogPassword(e.target.value) }} placeholder="Password" />
                        <button className={`${checkLogInDisables({ userName: logUserName, password: logPassword }) ? 'glow-on-hover auth-button' : 'glow-button opacity-30 !cursor-not-allowed auth-button'}`} >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth
import { auth } from '@/firebase/firebase.conf';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
// !                *************** check inputs ******************

// ?                *************** check sign in ******************

export const checkLogInDisables = ({ userName, password }: { userName: string, password: string }) => {
    return userName.length > 0 && password.length > 0;
}
// ?                *************** check up in ******************

export const checkSignDisables = ({ userName, password, email }: { userName: string, password: string, email: string }) => {
    return userName.length > 0 && password.length > 0 && email.length > 0;
}

// !                *************** funcktions Auth ******************
export const signup = async ({ email, password }: { email: string, password: string }) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        return user
    } catch (error) {
        console.log(error);

    }
}
export const login = async () => {

}
export const signout = async () => {
    signOut(auth)
}
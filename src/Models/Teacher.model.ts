import { User } from 'firebase/auth';
import { StaticImageData } from 'next/image';
import {Dispatch, SetStateAction} from 'react'
export interface TeacherCardModel{
    star: number;
    name: string;
    image: StaticImageData;
    subject: string;
    descr:string
}

export interface userModel {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>
}
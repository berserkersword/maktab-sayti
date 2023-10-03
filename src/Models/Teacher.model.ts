import { StaticImageData } from 'next/image';
export interface TeacherCardModel{
    star: number;
    name: string;
    image: StaticImageData;
    subject: string;
    descr:string
}
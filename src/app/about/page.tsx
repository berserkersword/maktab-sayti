import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div className='min-h-[100vh] flex justify-center flex-col'>
            <Navbar data={{ menuNum: 3 }} />
            <div className='container flex  justify-center mt-40 flex-col px-40'>
                <h1 className='text-center text-white text-2xl dela-gothic glow'>
                    BIZ HAQIMIZDA
                </h1>
                <p className='text-center font-montserrat font-semibold text-[#EEE] mt-10 text-xl'>
                    Maktab.uz - 1-11-sinflar uchun eng yirik umumta`lim onlayn maktabi hamda maktab o`quv dasturi bo`yicha videodarslar va boshqa materiallar platformasi.
                </p>
                <p className='text-center font-montserrat font-semibold text-[#eee] mt-10 text-xl'>
                    2020 yildan boshlab biz har bir o`quvchiga eng yaxshi o`qituvchilardan ta`lim olish va ularga baxtli bolalikni ta`minlash uchun yuqori sifatli bepul masofaviy ta`lim tizimini ishlab chiqmoqdamiz.
                </p>
                <p className='text-center font-montserrat font-semibold text-[#eee] mt-10 text-xl'>
                    Platforma doimiy ravishda to`ldirilib va yangilanib boriladi, shuningdek, reklamadan butunlay xoli. Platforma materiallaridan nafaqat maktab o`quvchilari va ularning ota-onalari, balki o`qituvchilar ham maktablarda dars jarayonida foydalana oladilar. Agar kutubxonadan Siz darslikni “javondan olib”, kerakli mavzuni o`zlashtira olsangiz, Maktab.uz - bu masofaviy ta`limning to`laqonli ekotizimidir
                </p>
                <p className='text-center font-montserrat font-semibold text-[#eee] mt-10 text-xl'>
                    Nima uchun anan bu sayt ?
                </p>
                <p className='text-center font-montserrat font-semibold text-[#eee] mt-10 text-xl'>
                    Ba`zilar uchun ushbu platforma repetitorning o`rnini bosadigan tizim bo`lsa, boshqalar uchun - uydagi haqiqiy maktabdir. Kimdir oilasi bilan dunyo bo`ylab sayohat qiladi, tez-tez boshqa joyga ko`chadi yoki chet elda yashaydi. Kimdir o‘z sport yoki san’at mashg‘ulotlarini maktab bilan uyg‘unlashtira olmaydi. Kimnidir maktabga borishdan jamoa yoki o‘qituvchilar bilan nizolar to‘xtatadi, kimnidir ta’lim sifati qoniqtirmaydi, kimgadir esa oilaning e’tiqodi ruxsat etmaydi. Ularning barchasini umumiy tanlov - bepul va sifatli masofaviy ta`limni tanlash birlashtiradi.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default page
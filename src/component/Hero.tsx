

import {Cursor, useTypewriter } from 'react-simple-typewriter'
import BgCircle from './BgCircle'
import bisImage from '../assets/images/bis.png'




const Hero = () => {
    const [text] = useTypewriter({
        words: [
            'Hi, I am Bisrat',
             'Front-end Developer',
              'Back-end Developer', 
              'React Devloper!'],
        loop:true,
        delaySpeed: 2000,
      })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BgCircle/>
        <img src={bisImage} height={100} width={100} alt="bisrat" className='relative rounded-full h-32 w-32 mx-auto object-cover animate-pulse'/>
        <div className='z-20'>
            <h2 className='text-sm font-bold uppercase text-[#F89600] pb-2 md:tracking-[12px] tracking-[10px] dark:text-[#E76500]'>Software Devloper</h2>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-white dark:text-gray-800'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#f7AB0A'/>
            </h1>
            <div className='m-5 z-10'>
                <a href="#about">
                    <button className='heroBtnSmall md:heroBtn'>About</button>
                </a>
                <a href="#experience">
                    <button className='heroBtnSmall md:heroBtn'>Experience</button>
                </a>
                <a href="#skills">
                    <button className='heroBtnSmall md:heroBtn'>Skills</button>
                </a>
                <a href="#projects">
                    <button className='heroBtnSmall md:heroBtn'>Education</button>
                </a>
                <a href="#contact">
                    <button className='heroBtnSmall md:heroBtn'>Contact Me</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
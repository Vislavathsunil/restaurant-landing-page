import React from 'react'
import bgvideo from "../assets/hero.mp4"
import hero from "../assets/hero.jpeg"
import logo from "../assets/logo.png"

// framer motion
import { motion } from "framer-motion"

function Hero() {
    return (
        <section  >

            <div className='relative h-screen justify-center items-center  '>
                {/* background image */}
                <div className='absolute w-full h-full -z-20  overflow-hidden'  >
                    <video src={bgvideo} muted loop autoPlay poster={hero} className='w-full h-full object-cover'></video>
                </div>
                <div className='relative z-20  h-screen flex flex-col justify-end items-center pb-14 md:pb-10 ' >
                    <motion.img
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        loa
                        src={logo} alt="logo" className='w-[300px] md:w-[800px] lg:w-[800px] ' />
                    <p className='mt-2 text-left text-2xl md:text-xl pb-6 md:pb-0 font-serif tracking-wider'>Hyderabad</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
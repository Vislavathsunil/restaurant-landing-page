import React from 'react'
import MissionVideo from "../assets/mission.mp4"
import MissionPoster from "../assets/mission.jpeg"

import { MISSION } from "../Constants/index"


//motion framer
import { motion, transform } from 'framer-motion'

function Mission() {
    return (
        <section id="mission" >
            <div className='container mx-auto text-center my-20'>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='mb-8 text-3xl lg:text-4xl font-semibold'>Our Mission</motion.h2>

                <div className='relative flex justify-center items-center px-8' >
                    <video src={MissionVideo} autoPlay muted loop poster={MissionPoster} className='w-full rounded-3xl'> </video>
                    <div className='absolute w-full h-full bg-black/40 rounded-3xl  '></div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className='absolute max-w-lg    w-full max-sm:px-8  text-center tracking-tighter text-xl lg:text-3xl  overflow-hidden '>{MISSION}</motion.p>
                </div>

            </div>
        </section>
    )
}

export default Mission
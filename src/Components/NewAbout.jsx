import React from 'react'
import aboutImg from "../assets/about.jpeg"
import { ABOUT } from "../Constants"

//motion framer
import { motion, transform } from 'framer-motion'

function NewAbout() {
    return (
        <section id="about"  >

            <div className='container mx-auto py-8 mb-8 '>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='text-center mb-8 text-3xl lg:text-4xl  font-semibold'  >
                    About Us
                </motion.h2>


                <div className='grid gap-8 md:grid-cols-2 px-8 '>

                    <motion.img
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        src={aboutImg} alt="about img" className='w-full h-full  rounded-lg' />

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className='sm:max-md:text-3xl text-4xl ' >{ABOUT.header}</h1>
                        <p className='py-6 text-stone-300 text-lg sm:max-md:text-xl ' >{ABOUT.content}</p>
                    </motion.div>

                </div>
            </div>

        </section>
    )
}

export default NewAbout
import React from 'react'
import { DISHES } from '../Constants'

//motion framer
import { motion, transform } from 'framer-motion'


function Dishes() {
    return (
        <section id="dishes"  >

            <div className='container mx-auto  w-full inset-0 my-12 py-10 px-8'>
                <div className='text-center  '>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className='mb-8 text-3xl lg:text-4xl font-semibold ' >Dishes</motion.h2>
                </div>

                <div>
                    <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-8 ' >

                        {
                            DISHES.map((dish, index) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.05 }}

                                    transition={{ duration: 0.8 }}
                                    key={index} className='flex flex-col items-center text-center ' >
                                    <div >
                                        <img src={dish.image} alt={dish.title} className='w-full rounded-lg' />
                                    </div>
                                    <div className='py-4' >
                                        <h4 className='text-xl lg:text-base font-semibold' >{dish.title}</h4>
                                        <p className='text-lg lg:text-sm text-gray-400 pt-2' >{dish.description}</p>
                                    </div>

                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Dishes
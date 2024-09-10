import React from 'react'
import { CUSINES } from "../Constants/index"

//motion framer
import { motion, transform } from 'framer-motion'

function Expertise() {
    return (
        <section id="expertise">
            <div className='container mx-auto text-center py-8 my-16'>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='mb-4 text-3xl lg:text-4xl font-semibold '>Our Expertise</motion.h2>

                <div className='px-8 py-8'  >
                    {
                        CUSINES.map((cousine, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}

                                key={index} className='flex items-center gap-8 py-4' >
                                <div className='flex-shrink-0  text-xl'>
                                    {cousine.number}
                                </div>
                                <div className='flex-shrink-0 w-1/3' >
                                    <img src={cousine.image} alt={cousine.title} className='rounded-xl h-auto' />
                                </div>
                                <div className='' >
                                    <h3 className=' text-start text-2xl lg:text-3xl uppercase text-red-400' >{cousine.title}</h3>
                                    <p className='text-start mt-4 text-stone-300' >{cousine.description}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Expertise;
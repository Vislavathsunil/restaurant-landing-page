import React from 'react'
import { CONTACT, SOCIAL_MEDIA_LINKS } from '../Constants/index'

//motion framer
import { motion, transform } from 'framer-motion'

function ContactUs() {
    return (
        <address id="contact">
            <div className='container mx-auto py-4 mt-6 px-8'>
                <motion.h2 
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                className='mb-8 text-3xl lg:text-4xl text-center font-semibold'>Contact Us</motion.h2>

                <div className="flex flex-col md:flex-row  items-center justify-around gap-8 my-8" >
                    <div className='flex flex-col justify-center gap-4 ' >
                        {
                            CONTACT.map((contact, index) => (
                                <a  key={index} href={contact.href} className='text-lg text-wrap md:text-base text-start text-slate-400 cursor-pointer '>{contact.value}</a>
                            ))
                        }
                    </div>

                    {/* Social Media */}
                    <div  className='flex justify-center items-center gap-4'>
                        {
                            SOCIAL_MEDIA_LINKS.map((media, index) => (
                                <a href={media.href} target='_blank'> {media.icon} </a>
                            ))
                        }
                    </div>

                </div>

                <p className='text-center text-slate-400 text-sm     pt-4 ' >&copy;Sunil,All rights are reserved.</p>

            </div>


        </address>
    )
}

export default ContactUs
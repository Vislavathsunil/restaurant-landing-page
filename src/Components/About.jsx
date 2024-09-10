import React from 'react'
import aboutImg from "../assets/about.jpeg"
import { ABOUT } from "../Constants"

function About() {
    return (
        <section className='container mx-auto py-8 mb-8 ' >

            <h2 className='text-center mb-6 text-2xl lg:text-3xl font-semibold '  >
                About Us
            </h2>


            <div className='flex  flex-wrap justify-center items-center gap-10 pt-10 h-[400px] '>
                <div className='flex justify-center items-center'>
                    <img src={aboutImg} alt="about img" className='w-[320px] h-[400px] rounded-xl   md:-rotate-3 ' />
                </div>
                <div className='flex flex-col items-center gap-4' >
                    <h1 className='text-3xl' >{ABOUT.header}</h1>
                    <p className='text-sm  text-stone-400 w-[320px] md:w-[350px] lg:w-[400px] ' >{ABOUT.content}</p>
                </div>

            </div>


        </section>
    )
}

export default About
import React, { useState } from 'react'
import { LINKS } from "../Constants/index"
import logo from "../assets/logo.png"

// icons
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
    const [isMobile, setIsMobile] = useState(false);

    function handleMobile() {
        setIsMobile(!isMobile);
    }

    function handleLogo() {
        setIsMobile(false);
    }


    function handleClick(e, href) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = -85;
            const elementPosition = element.getBoundingClientRect().top;
            const offSetPosition = elementPosition + window.scrollY + offset;
            window.scrollTo({
                top: offSetPosition,
                behavior: 'smooth'
            })
            setIsMobile(false);
        }
    }

    function handleClick(e, href) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = -85;
            const elementPosition = element.getBoundingClientRect().top;
            const offSetPosition = elementPosition + window.scrollY + offset;
            window.scrollTo({
                top: offSetPosition,
                behavior: 'smooth'
            })
            setIsMobile(false);
        }
    }


    return (
        <nav className='fixed z-30 top-4 left-0 right-0 flex flex-col items-center '   >

            {/* Desktop navbar  */}
            <div className='border  border-stone-50 mx-auto  hidden md:block max-w-2xl lg-flex  justify-center  items-center gap-4 px-6 py-4 backdrop-blur-lg  rounded-lg ' >
                <div className='flex items-center justify-between gap-6'>

                    <div>
                        <a href="#" className="cursor-pointer" rel="noopener noreferrer" oncClick={handleLogo}>
                            <img src={logo} alt="brand" width={150} height={150} className='' />
                        </a>
                    </div>


                    <div className='w-full flex flex-wrap gap-3 justify-center items-center'>
                        {
                            LINKS.map((link, index) => (
                                <a key={index} href={link.targetId} className='text-sm uppercase' onClick={(e) => handleClick(e, link.targetId)} > {link.text}</a>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='md:hidden lg:hidden w-full px-4' >

                <div className=' flex items-center justify-between'>

                    <div className='flex justify-center items-center '>
                        <a href="#" onClick={handleLogo}>
                            <img src={logo} alt="brand" width={150} height={150} />
                        </a>
                    </div>

                    <div className='lg:hidden flex justify-center items-center'>
                        <button className="w-8 h-8" onClick={handleMobile}  > {!isMobile ? <FaBars className="w-8 h-8"/> : <FaTimes className="w-8 h-8" />}</button>
                    </div>


                </div>


                {isMobile && <div className='flex flex-col flex-wrap gap-3 justify-center items-start py-4 backdrop-blur-lg' >
                    {
                        LINKS.map((link, index) => (
                            <a key={index} href={link.targetId} className='block p-4 text-sm uppercase' onClick={(e) => handleClick(e, link.targetId)}> {link.text}</a>
                        ))
                    }
                </div>}

            </div>

        </nav >
    )
}

export default NavBar
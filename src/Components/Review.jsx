import { REVIEW } from "../Constants/index"
import reviewer from "../assets/xaviour.jpeg"
import { CUSTOMERIMAGES } from "../Constants/index"

//motion framer
import { motion, transform } from 'framer-motion'

function Review() {
    return (
        <section id="review">
            <div className='container mx-auto px-8'>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}

                    className='mb-8 text-3xl  lg:text-4xl text-center font-semibold '>Review</motion.h2>

                <div className='flex flex-col'>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-10 text-3xl lg:mx-32 lg:mt-10 lg:text-[2.5rem] font-light leading-normal  " >{REVIEW.content}</motion.p>

                    <div className="flex justify-center items-center gap-6 mb-6 " >
                        <img src={reviewer} width={80} height={80} alt={REVIEW.name} className="rounded-full" />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="flex flex-col justify-center " >
                            <h4 className="text-lg" >{REVIEW.name}</h4>
                            <p className="text-sm text-stone-400" >{REVIEW.profession}</p>
                        </motion.div>
                    </div>
                </div>

                {/* Customer images  */}
                <div className="flex flex-col justify-center  items-center  gap-6 md:flex-row md:items-center md:gap-8  my-8 ">
                    {
                        CUSTOMERIMAGES.map((image, index) => (
                            <motion.img
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.25 }}
                                key={index} src={image} alt={`{customer${index}}`} className=" rounded-tl-xl rounded-br-xl w-full h-auto md:w-40 md:h-52 p-0 " />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Review
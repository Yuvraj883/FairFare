'use client';


import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = (prop) => (

  <section className={`${styles.paddings}`}>


        <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
      </motion.div>

<div className=' h-screen w-full'>

        <div className='bg-gray-800 flex-col justify-center rounded-[40px]'>
            <form onSubmit={prop.getDistance}className='max-w-[800px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>LOCATION</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>FROM</label>
                    <input value={prop.from} onChange={prop.changeFrom} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>WHERE</label>
                    <input value={prop.to} onChange={prop.changeTo} className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p>Ride safe</p>
                </div>

        
        {/* <a href="#Getstarted">
          <div>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>FIND FARE</button>
          </div>
        </a> */}
                {/* <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>FIND FARE</button> */}
                {/* <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>DISTANCE :</button> */}
                <button type="submit" className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>TIME TO REACH :</button>
            </form>
        </div>
    </div>
      {/* </motion.div> */}

    {/* </motion.div> */}
  </section>
);

export default Feedback;

import React from 'react';
import "../styles/Services.css"

import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text"> कर्मसु कौशलम्</p>
                    <p className='heading-text'>What I can do</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Web Development</p>
                        <p className='services-desc'>I use various web technologies to develop a Full stack, attrative and creative websites. </p>
                    </div>

                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>App Development</p>
                        <p className='services-desc'>I use React Native, and Flutter to develop a Full stack, attrative apps. </p>
                    </div>
                    
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;

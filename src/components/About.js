import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile1.jpg'


const About = () => {

  const horizontal = {
    x: 0,
    opacity: 0.9,
    transition: { type: 'spring', duration: 2, bounce: 0.3 }
  }

  return (
    <>
      <div className="about" id='about'>

    

        <div className="container">
          <motion.div initial={{ x: '-100%', opacity: 0 }} whileInView={horizontal} viewport={{ once: true }} className="heading">
            <p className="heading-sub-text">Who am I</p>
            <p className='heading-text'>About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div initial={{ x: '-100%', opacity: 0 }} whileInView={horizontal} className="about-content">
              <p>
              Hey, I'm Ankit Kumar – the coding maestro from NIT, Agartala! 🎮 By day, I'm decoding engineering mysteries; by night, I'm crafting apps and websites that'll blow your mind! 💥</p>
              <br />
              <p>
              When I'm not squashing bugs, you'll find me in the competitive programming arena, sharpening my digital swords. ⚔️ Let's make tech funnier, cooler, and crazier – one line of code at a time! 🚀
              </p>
            </motion.div>
            <motion.div initial={{ x: '50', opacity: 0 }} whileInView={horizontal} className='about-img'>
              <img src={ProfileImg} alt="Profile" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
};

export default About;

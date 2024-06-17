import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/kritimukha.jpg'


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
            <p className="heading-sub-text">अहं ब्रह्मास्मि !</p>
            <p className='heading-text'>Who Am I</p>
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

      
          <div className='badge'>
            <a href="https://leetcode.com/u/kalki_0/" target="_blank"><img src="https://img.shields.io/badge/LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06" target="_blank" /></a>
            <a href="https://www.codechef.com/users/kalki_0" target="_blank"><img src="https://img.shields.io/badge/CodeChef-%23964B00.svg?style=for-the-badge&logo=CodeChef&logoColor=white" target="_blank" /></a>
            <a href="https://codeforces.com/profile/ankit0369" target="_blank"><img src="https://img.shields.io/badge/Codeforces-445f9d?style=for-the-badge&logo=Codeforces&logoColor=white" target="_blank" /></a>
            <a href="https://www.geeksforgeeks.org/user/kalki0/" target="_blank"><img src="https://img.shields.io/badge/GeeksforGeeks-gray?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c" target="_blank" /></a>

          </div>

        </div>
      </div>
    </>
  )
};

export default About;

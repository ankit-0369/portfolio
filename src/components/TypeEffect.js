import React from 'react'
import Typewriter from 'typewriter-effect';
const TypeEffect = () => {

  return (
    <span> <Typewriter
      options={{
        strings: [
          'Developer',
          'Competitive Programmer',
          'EIE \'25 grad',
       
        ],
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 50, // backspacing speed in milliseconds
        smartBackspace: true, // backspace only the non-matching characters
        autoStart: true,
        loop: true,
      }}
    /></span>
  )
}

export default TypeEffect


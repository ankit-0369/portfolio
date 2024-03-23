import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
    const fade = {
        opacity: 1,
        transition:{
            duration: 1.5
        }
    }

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition:{
            duration: 1.5
        }
    }


  return (
      <>
        <div className="contact" id='contact'>
            <div className="container">
                <motion.div className="heading" initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }}>
                    <p className="heading-sub-text">Hire Me</p>
                    <p className='heading-text'>Get in Touch</p>
                </motion.div>
                <div className="contact-box">
                    <motion.div className="left-box" initial={{opacity: 0, y: '-50px'}} whileInView={verticalLeft}>
                        <div className="contact-heading">
                            <p>Like what you see in my portfolio? Let's chat about potential
                                 freelancing gigs, projects, or anything else where I can lend
                                  a hand. Drop me a line via the links provided or fill out the
                                   form below. Excited to connect!</p>
                        </div>
                        <div className="contact-hello">
                            <p>Say Hello</p>
                            <Link className='hello-links' to="//wa.me/+917004151046" target='_blank'>wa.me/ankitkumar</Link>
                            <Link className='hello-links' to="//mailto:nvsankit2020@gmail.com" target='_blank'>nvsankit2020@gmail.com</Link>
                        </div>
                    </motion.div>
                    <motion.div className="right-box" initial={{opacity: 0, y: '50px'}} whileInView={verticalLeft}>
                    
                        <form
                            name="contact-form"
                            method="POST"
                            data-netlify="true"
                            action="POST"
                        >
                            <input type="hidden" name="form-name" value="contact-form" />
                            <div className="form-top">
                            <div className="name">
                                <label htmlFor="name">Your Name</label>
                                <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                required
                                />
                            </div>

                            <div className="email">
                                <label htmlFor="email">Your Email</label>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email address"
                                required
                                />
                            </div>
                            </div>

                            <div className="form-mid">
                            <div className="message">
                                <label htmlFor="message">Your message</label>
                                <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Hi, I think I need you to work on this particular product. Reach out as soon as you can"
                                required
                                ></textarea>
                            </div>
                            </div>

                            <div className="form-btn">
                            <button type="submit" className="hero-contact">
                                Send Message
                            </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;

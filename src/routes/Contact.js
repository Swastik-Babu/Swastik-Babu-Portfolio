import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg3 from '../components/Heroimg3';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg3 heading="Contact" text="Lets have a chat in case u want to know more about me/my skills/my works"/>
      <Footer/>
    </div>
  )
}

export default Contact;
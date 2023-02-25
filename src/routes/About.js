import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg4 from '../components/Heroimg4';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg4 heading="About" text="Here are my social media profiles"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import PricingCard from '../components/PricingCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Here are some of my most recent works"/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project;
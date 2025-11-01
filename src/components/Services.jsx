import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'
import { motion } from "framer-motion";

const Services = () => {

    const servicesData = [
        {
            title: 'Creative',
            description: 'Branding, content production, music, film, design.',
            icon: assets.ads_icon
        },
        {
            title: 'Technology',
            description: 'Web & app development, AI, software, games.',
            icon: assets.marketing_icon
        },
        {
            title: 'Strategy',
            description: 'Marketing, management, consulting.',
            icon: assets.content_icon
        },
        {
            title: 'Fashion & Lifestyle',
            description: 'Apparel collaborations, styling, merchandising.',
            icon: assets.social_icon
        }
    ]

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    
    id='services' className='relative  flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700'>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 z-1' />

      <div className="z-10">
        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
      </div>
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index)=>(
            <ServicesCard key={index} service={service} index={index}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Services

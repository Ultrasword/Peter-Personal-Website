import {React, Link} from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant } from '../utils/motion'

import {SectionWrapper} from '../hoc'

const ServiceCard = ({index, title, icon, link}) => {
  return (
    <a href={link} className="lg:w-[48%] md:w-full xs:w-full">
      {console.log(link)}
      <Tilt glareEnable={true} tiltMaxAngleY={10} scale={0.5} glareColor={"#ffffff"} perspective={1000} transitionEasing={"cubic_bezier(0.03, 0.98, 0.52, 0.99)"}
              transitionSpeed={10}>
        <motion.div 
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 p-[1px] rounded-[20px] shadow-card">
          <div
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} 
              className="mb-10 h-100 object-contain rounded-[20px] shadow-card-image"></img>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

          </div>
        </motion.div>
      </Tilt>
    </a>
    
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>    

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I'm an <span className="text-white">18 year old</span> <span>self-taught programmer</span> studying Computer Engineering student at <span className="text-white">The University of Waterloo</span>. <span className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 inline-block text-transparent bg-clip-text">Here are some of my projects!</span>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about", "bg-about-gradient")
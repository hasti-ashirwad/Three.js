import React from 'react'
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants/index";
import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[450px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.9, 0.75)}
      className='w-full green-pink-gradient p-[3px] rounded-[20px] min-w-[350px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 8,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] min-w-[350px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-black text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About=()=> {
  return (
    <>
    <div>
    <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{color:"rgb(27 76 149)"}}>Current Job</h2>
    </motion.div>
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and
    </motion.p>
     <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> 
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <>
      <VerticalTimelineElement

        contentStyle={{
          background: " linear-gradient(131deg, #143058 0%, #1A6590 100%)",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #1F7FFA" }}
        date={<div className=' flex' style={{ marginLeft: "auto" }}>
          <image src={experiences.image} className='w-70 h-70 ' />
          <image src={experiences.image1} className='w-70 h-70' />
          <image src={experiences.image2} className='w-70 h-70 ' />
          <image src={experiences.image3} className='w-70 h-70 ' />
        </div>}

        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[70%] h-[70%]'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>

        </div>

        <ul className='mt-5 list-disc ml-5 space-y-1'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[13px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </>
  );
};

const Experience = () => {
  return (
    <>
    <div  id="services">
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`} style={{ color: "#143058" }}>
        Service We Provide        </h3>
        <p className={`${styles.sectionSubText} text-center`}>
          The Practice Of Providing Existing And Potential Customers With Support To<br/>
          Enhance Their Satisfaction With The Company And Its Products Or Services.</p>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#1A6590">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

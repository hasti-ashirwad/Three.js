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
          background: " linear-gradient(131deg, #02176C 0%, #0076B6 100%)",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #1F7FFA" }}
        date={<div className=' flex' style={{ marginLeft: "auto" }}>
          <image src={experience.image} className='w-70 h-70 ' />
          <image src={experience.image1} className='w-12 h-12' />
          <image src={experience.image2} className='w-12 h-12 ' />
          <image src={experience.image3} className='w-12 h-12 ' />
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
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
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
        <h3 className={`${styles.sectionHeadText} text-center`} style={{ color: "rgb(27 76 149)" }}>
        Service We Provide        </h3>
        <p className={`${styles.sectionSubText} text-center`}>
          The Practice Of Providing Existing And Potential Customers With Support To<br/>
          Enhance Their Satisfaction With The Company And Its Products Or Services.</p>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#1F7FFA">
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

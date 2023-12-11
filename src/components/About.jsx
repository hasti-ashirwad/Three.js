import React from 'react'
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { RiUserSearchLine } from "react-icons/ri";
import { PiMedal } from "react-icons/pi";
import "../style/Job.css"
import job from "../assets/company/t3.png"
const ServiceCard = ({ index }) => (
  <Tilt className='xs:w-[350px] w-full'>
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
        className='bg-tertiary rounded-[20px] py-4 px-14 min-h-[220px] min-w-[350px] flex justify-evenly items-center flex-col'
      >
        <div>
              <Grid container spacing={2}>
                <Grid >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div >
                      </div>
                      <img className='job-image ' src={job}></img>                                                  
                      <div>
                        <Typography variant="h6" style={{
                          textTransform: 'capitalize', 
                          fontWeight: "600",
                          background: '-webkit-linear-gradient(131deg, #143058 0%, #1A6590 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginLeft:"0.7rem"
                        }}>React.js
                        </Typography>
                        <div  className="flex"style={{ margin: "0.5rem" }}>
                          <Typography variant="subtitle1 flex">
                            <RiUserSearchLine style={{
                              fontSize: '18px'
                            }} /> Position
                          </Typography>
                          <Typography variant="subtitle1" style={{ textTransform: "capitalize",display:"flex" }}>
                            <PiMedal style={{ fontSize: '18px', marginLeft: '12px' }} />
                          </Typography>3+Years</div>
                      </div>
                    </div>
                    <Typography sx={{ fontSize: "0.9rem" }} className="job_description" >
                        there's hidden value in finding a concise expression that perfectly distills our own beliefs.
                    </Typography>
                    <div className="button-location ">
                      <Link>
                        <button
                          className="job-button"
                          style={{
                            textTransform: 'capitalize',
                            fontWeight: "600",
                            background: '-webkit-linear-gradient(102deg, #02176C 9.82%, #0076B6 93.22%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}
                        >
                          Apply For Job
                        </button>
                      </Link>
                      <Typography variant="body1" style={{ textTransform: 'capitalize',display:"flex" }}>
                        <GrLocation style={{ fontSize: "20px" }} /> location
                      </Typography>
                    </div>
                </Grid>

              </Grid>
            </div>
          </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText} style={{ color: "#143058" }}>Current Job</h2>
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
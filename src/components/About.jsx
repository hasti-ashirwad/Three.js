import React, { useEffect, useState }  from 'react'
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { RiUserSearchLine } from "react-icons/ri";
import { PiMedal } from "react-icons/pi";
import "../style/Job.css"
import axios from "axios";

const About = () => {
  const [jobdata, setJobdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_JOB_URL+"jobs");
        console.log("response",response.data);
        setJobdata(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
   if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
    <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText} style={{ color: '#143058' }}>
            Current Jobs
          </h2>
        </motion.div>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and
        </motion.p>

        <div className='flex flex-wrap gap-4'>

    {jobdata.map((value, index) => (
      <div key={index}>        
        <div className='mt-10 flex flex-wrap gap-9 justify-content-center'>        

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
        className='bg-tertiary rounded-[20px] py-4 px-12 min-h-[220px] min-w-[350px] flex justify-evenly items-center flex-col'
      >
        <div>
              <Grid container spacing={2}>
                <Grid >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='job-image' style={{ backgroundImage: `url(${value.image})`, backgroundSize: 'cover' }}></div>
                      <div>
                        <Typography variant="h6" style={{
                          textTransform: 'capitalize', 
                          fontWeight: "600",
                          background: '-webkit-linear-gradient(131deg, #143058 0%, #1A6590 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          marginLeft:"0.7rem"
                        }}>{value.position_name}
                        </Typography>
                        <div  className="flex"style={{ marginTop: "0.5rem", marginLeft:"0.1rem" }}>
                          <Typography variant="subtitle1 flex">
                            <RiUserSearchLine style={{
                              fontSize: '18px'
                            }} /> {value.n_position} Position
                          </Typography>
                          <Typography variant="subtitle1" style={{ textTransform: "capitalize",display:"flex" }}>
                            <PiMedal style={{ fontSize: '18px', marginLeft: '12px' }} />
                          </Typography> {value.experience} </div>
                      </div>
                    </div>
                    <Typography sx={{ fontSize: "0.9rem" }} className="job_description" >
                       {value.description}
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
                        <GrLocation style={{ fontSize: "20px" }} /> {value.location}
                      </Typography>
                    </div>
                </Grid>

              </Grid>
            </div>
          </div>
    </motion.div>
  </Tilt>
  </div>
      </div>
    ))}
    </div>
  </>
  );
};
export default SectionWrapper(About);
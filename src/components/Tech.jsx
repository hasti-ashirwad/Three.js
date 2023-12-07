import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../style";
import { textVariant } from "../utils/motion";

const Tech = () => {
  console.log("tech",technologies);
  return (
    <>
    <motion.div variants={textVariant()}>
    <h2 className={`${styles.sectionHeadText} text-center`} style={{ color: "rgb(27 76 149)",marginBottom:"4rem" }}>
         Our Expertise
        </h2>
        </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-14'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

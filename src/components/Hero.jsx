import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { Link as ScrollLink } from "react-scroll";
const Hero = () => {

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className={`relative w-full  mx-auto`} style={{height:"93vh"}}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#021927]' />
          <div className='w-1 sm:h-80 h-80 violet-gradient' />
        </div>

        <div style={{marginTop:"2rem"}}>
          <h3 className={`${styles.heroHeadText} text-white `} >
          Let's Build Online Success <br/>Together With<span className='text-[#021927]'> Standard & Influence</span>
          </h3>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <Typewriter
              options={{
                strings: ['We bring reality into your idea', 'We build invoative web and mobile app'],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 20,
                cursor: '|',
                pauseFor: 1000,
                wrapperClassName: 'typewriter-wrapper',
                cursorClassName: 'typewriter-cursor',
              }}
            />
          </p>
        </div>
      </div>
    {/* <ComputersCanvas/> */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <ScrollLink   
        to="career"
            spy={true}
            smooth={true}
            offset={-2550}
            duration={500}
            style={{cursor:"pointer"}}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-bg-[#fff] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
      
              }}
              className='w-3 h-3 rounded-full bg-[#fff] mb-1'
            />
          </div>
          </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;

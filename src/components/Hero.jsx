import {useState, useEffect, React} from 'react'

import {motion} from 'framer-motion'
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'


// maybe add in bubbles later on?


const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(max-width: 500px)'
    );

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener('change',
    handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange);
    }
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#A0E7FF]"/>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#A0E7FF] to-black"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hey! I'm <span className="text-[#A0E7FF]">Peter</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           Welcome to the void... <br className="sm:block hidden"/> and my portfolio.
          </p>
        </div>
      </div>

      <ComputersCanvas isMobile={isMobile}/>

      <div className={`absolute xs: bottom-20 bottom-30 w-full flex justify-center items-center z-10`}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y:[0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
import {BallCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

import {motion} from 'framer-motion'
import {textVariant} from '../utils/motion'
import {styles} from '../styles'

const Tech = () => {
  return (
    <div className="tech-radial">
      <motion.div
        variants={textVariant()}
        className="mb-[50px]"
        >
        <p className={`${styles.sectionSubText}`}>
          Technologies I've Worked With.
        </p>

        <h2 className={styles.sectionHeadText}>
          The Tech Marbles Have Assembled...
        </h2>

      </motion.div>
      <div 
        className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
              <BallCanvas icon={tech.icon}></BallCanvas>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech", "bg-tech-gradient")
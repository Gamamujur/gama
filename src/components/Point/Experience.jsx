import { experience } from "../../assets/data";
import { motion } from "framer-motion";

const containervar = {
    initial:{
        
    },
    animate:{
        tranisiton:{
            delayChildren:1,
            staggerChildren:0.5
        }
    },
    exit:{
        transition:{
            staggerChildren:0.2
        }
    }
}

const animvar = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit:{
    x:'200%'
  }
};

const headingvar = {
    initial: {
        opacity:0
    },
    animate:{
        opacity:1
    },
    exit:{
        opacity:0
    }
}


const Experience = () => {
  return (
    <motion.div className="w-full h-fit bg-slate-100 md:h-full pt-24 overflow-hidden" variants={containervar} initial="initial" animate="animate" exit="exit">
        <motion.h1 className="text-center  font-bold font-mons text-2xl tracking-wider" variants={headingvar}>Experience</motion.h1>
      <div className="flex flex-col  w-full md:h-full items-center gap-4  p-4  h-[90vh] overflow-scroll compcontainer pb-24 lg:pb-0">
      
        {experience.map((data, index) => (
          <motion.div
            variants={animvar}
            initial="initial"
            whileInView="animate"
            viewport={{ once:true, amount:0.2 }}
            exit="exit"
            key={index}
            className="w-full h-fit bg-slate-200 sm:w-3/4 border-[1px] border-slate-500 rounded-lg shadow-md shadow-slate-500"
          >
            <div className="w-full h-full p-2 font-mons">
              <div className="border-b-2 border-slate-300">
                <h1 className="text-lg font-medium">{data.position}</h1>
                <h2 className="text-xs font-light text-black">{data.date}</h2>
              </div>

              <div>
                <h1 className="text-xs mt-2 md:text-sm leading-relaxed">
                  <span className="font-medium">Utilized Tech : </span>
                  {data.utilize}
                </h1>
                <p className="text-[10pt] md:text-base mt-3 leading-6 md:leading-7">
                  {data.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

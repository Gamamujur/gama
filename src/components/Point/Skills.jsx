import rightarrow from "../../assets/SVG/right-chevron-svgrepo-com.svg";
import htmlsvg from "../../assets/SVG/html-5-svgrepo-com.svg";
import cssvg from "../../assets/SVG/css-svgrepo-com.svg";
import javascriptsvg from "../../assets/SVG/javascript-svgrepo-com.svg";
import tailwindsvg from "../../assets/SVG/tailwind-css-svgrepo-com.svg";
import jquerysvg from "../../assets/SVG/jquery-svgrepo-com.svg";
import phpsvg from "../../assets/SVG/php-svgrepo-com.svg";
import mysqlsvg from "../../assets/SVG/oracle-mysql-logos-idSEhEKy8_.svg";
import laravelsvg from "../../assets/SVG/laravel-svgrepo-com (1).svg";
import reactsvg from "../../assets/SVG/react-javascript-js-framework-facebook-svgrepo-com (1).svg";
import nextjs from "../../assets/SVG/next-js-svgrepo-com.svg";
import typescriptsvg from "../../assets/SVG/typescript-icon-svgrepo-com.svg"
import mongosvg from "../../assets/SVG/mongodb-svgrepo-com.svg"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const contvar = {
  initial:{},
  animate:{
    transition:{
      delayChildren:0.5,
      staggerChildren:1
    }
  },
  exit:{
    transition:{
      staggerChildren:0.5
    }
  }
}

const skillvar = {
  initial : {
    opacity : 0
  },
  animate : {
    opacity : 1
  },
  exit : {
    opacity : 0
  }
}
const Skills = () => {
  const svgicon = {
    experienced: {
      icon: [
        htmlsvg,
        cssvg,
        javascriptsvg,
        tailwindsvg,
        jquerysvg,
        phpsvg,
        mysqlsvg,
        laravelsvg,
      ],
      desc: `I possess extensive experience in building Fullstack Web Applications using these tech stacks. My first encounter was with PHP and MySQL, where I learned the fundamentals of web development. Over time, I've expanded my knowledge by exploring advanced frameworks and libraries.`,
    },

    beginner: {
      icon:[reactsvg,nextjs,typescriptsvg,mongosvg],
      desc:`I'm currently in the early stages of exploring NextJS, and ReactJS with MERN stack using TypeScript. While I'm in the process of mastering these technologies, I'm excited to leverage their capabilities to build dynamic and interactive web apps.`
    },
  };


  const skillcont = {
    initial: {
      opacity: 0
      // width: 2,
      // height: 0,
    },
    animate: {
      // width: "var(--width-to)",
      // height: "90%",
      opacity:1,
      transition: {
        delayChildren:0.5,
        staggerChildren:0.5,
        
        // width: { delay: 1.5 },
        // height: { duration: 0.5 },
      },
    },
    exit: {
      width: 0,
      transition: {
        delay:0.5,
        staggerChildren:0.2
      },
    },
  };
  const navigate = useNavigate()
 const backnav = () =>{
  navigate(-1)
 }
  return (
    <div className="w-full h-full p-2 ">
      <motion.div className="flex flex-col w-full h-full pt-24" variants={contvar} initial="initial" animate="animate" exit="exit">
        <div>
          <motion.span
            className="flex items-center w-fit h-fit group hover:cursor-pointer"
            layoutId={2}
            transition={{ type: "spring", bounce: 0.2 }}
            onClick={()=>backnav()}
          >
            <img src={rightarrow} alt="Arrow" className="w-10 h-10" />
            <h1 className="text-[20pt] group-hover:scale-110 transition duration-300">Skills</h1>
          </motion.span>
        </div>
        <motion.div
          className="flex flex-col self-center h-full gap-4 p-1 overflow-y-scroll rounded-lg w-fit bg-neutral-600 skillcont md:justify-center"
          variants={skillcont}
         
        >
          <motion.div className="w-full h-fit bg-slate-100 rounded-xl " variants={skillvar}>
            <div className="w-full lg:flex lg:p-10">
              <div className="items-center lg:w-1/2 lg:flex lg:flex-col">
                <h1 className="p-2 text-xl font-semibold text-center lg:text-left font-mons">
                  Experienced ( &ge; 1 YoE)
                </h1>
                <div className="flex flex-wrap justify-center gap-4 p-3 pt-5 lg:justify-normal">
                  {svgicon.experienced.icon.map((icon, index) => (
                    <img key={index} src={icon} className="w-10 h-12" />
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 lg:border-l-2">
                <h1 className="mt-4">
                  <hr className="w-[90%] lg:hidden h-1 mx-auto rounded-tr-full rounded-br-full bg-neutral-600" />
                  <p className="p-2 text-sm leading-relaxed font-mons md:p-5">
                    {svgicon.experienced.desc}
                  </p>
                </h1>
              </div>
            </div>
          </motion.div>

          <motion.div className="w-full h-fit bg-slate-100 rounded-xl " variants={skillvar}>
            <div className="w-full lg:flex lg:p-10">
              <div className="items-center lg:w-1/2 lg:flex lg:flex-col">
                <h1 className="p-2 text-xl font-semibold text-center lg:text-left font-mons">
                  Beginner ( &lt; 1 YoE)
                </h1>
                <div className="flex flex-wrap justify-center gap-4 p-3 pt-5 lg:justify-normal">
                  {svgicon.beginner.icon.map((icon, index) => (
                    <img key={index} src={icon} className="w-10 h-12" />
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 lg:border-l-2">
                <h1 className="mt-4">
                  <hr className="w-[90%] lg:hidden h-1 mx-auto rounded-tr-full rounded-br-full bg-neutral-600" />
                  <p className="p-2 text-sm leading-relaxed font-mons md:p-5">
                    {svgicon.beginner.desc}
                  </p>
                </h1>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;

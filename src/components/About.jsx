import rightarrow from "../assets/SVG/right-chevron-svgrepo-com.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const option = [
  { id: 1, name: "Profile" },
  { id: 2, name: "Skills" },
  { id: 3, name: "Projects" },
];

const containervar = {
  initial: {},
  animate: {
    transition: {
      delay: 0.5,
      
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listvar = {
  initial: {
   
    y: -100,
  },
  animate: {
    y: 0,
    transition:{
      type:'spring',
      stiffness:150
    }
   
  },
};

const About = () => {
  const navigate = useNavigate();

  const triggerActive = (index) => {
    navigate(`/about/${index}`);
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <motion.div
          variants={containervar}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {option.map((option, index) => (
            <ul key={index}>
              <div>
              <motion.li
                layoutId={option.id}
                variants={listvar}
                className={`flex items-center text-[30pt] group w-fit gap-4 font-medium cursor-pointer sm:text-[40pt]`}
                onClick={() => triggerActive(option.name.toLocaleLowerCase())}
                
              >
                <img
                  src={rightarrow}
                  alt="Arrow"
                  className="w-8 transition duration-300 rotate-90 group-hover:rotate-0"
                />
                <motion.h1 className="w-[100%] h-[100%]">
                  {option.name}
                </motion.h1>
              </motion.li>
              </div>
              
            </ul>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;

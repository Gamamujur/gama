import { motion } from "framer-motion";
import rightarrow from "../../assets/SVG/right-chevron-svgrepo-com.svg";
import profileimg from "../../assets/profileimg.webp";
import { useNavigate } from "react-router-dom";

const containervar = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imgvar = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  exit:{
    opacity:0
  }
};
const pvar = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      type: "spring",
    },
  },
  exit: {
    y: "150%",
  },
};

const wordspan = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const namevar = {
  initial: { x: -200 },
  animate: {
    x: 0,
    transition: {
      type: "spring",
    },
  },
  exit: { x: -200 },
};

const Profile = () => {
  const desc = {
    first: `I'm a Web Developer who enjoys learning about web development. I graduated with a Bachelor's Degree in Information System in 2022 and have since been involved in web application.`,
    second: `My web development journey started with PHP and MySQL, and I was thrilled to complete my first project. Since then, I've been on an exciting mission to expand my skills. I've dived into full-stack web development using Laravel, MySQL, and JQuery, while also exploring React JS and Next JS. I am eager to embrace new challenges and bring my knowledge and expertise to real-world projects`,
  };

 const navigate = useNavigate()
 const backnav = () =>{
  navigate(-1)
 }
  return (
    <motion.div
      className="flex justify-start w-full h-full p-2"
      variants={containervar}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex w-full h-full pt-24">
        <div className="flex flex-col w-full h-full">
          <div>
            <motion.span
              className="flex items-center w-fit h-fit group hover:cursor-pointer"
              layoutId={1}
              transition={{ type: "spring", bounce: 0.2 }}
              onClick={()=>backnav()}
            >
              <img src={rightarrow} alt="Arrow" className="w-10 h-10" />
              <h1 className="text-[20pt] group-hover:scale-110 transition duration-300">Profile</h1>
            </motion.span>
          </div>
          <div className="h-full p-2 overflow-y-scroll compcontainer2">
            <div className="flex flex-col items-center h-full md:justify-around md:flex-row">
              <div className="max-w-[60%] sm:max-w-[40%] md:max-w-[40%] lg:max-w-[30%] ">
                <motion.img
                  variants={imgvar}
                  src={profileimg}
                  alt="Profile"
                  className="transition duration-300 grayscale hover:grayscale-0 hover:saturate-100"
                />
              </div>
              <div className="h-full md:w-[50%] text-sm leading-loose p-2 md:justify-center md:flex md:flex-col font-mons lg:text-base lg:leading-loose">
                <h1 className="mb-2 overflow-hidden text-lg font-bold font-mons">
                  <motion.p variants={namevar}>Hi, I'm Gama</motion.p>
                </h1>
                <h1 className="overflow-hidden">
                  <motion.p variants={pvar}>
                    {desc.first.split(" ").map((word, index) => (
                      <motion.span
                        variants={wordspan}
                        key={index}
                        className="inline-block mr-1"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </h1>
                <h1 className="mt-4 overflow-hidden">
                  <motion.p variants={pvar}>
                    {desc.second.split(" ").map((word, index) => (
                      <motion.span
                        variants={wordspan}
                        key={index}
                        className="inline-block mr-1"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;

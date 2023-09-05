import githubsvg from "../assets/SVG/github-142-svgrepo-com.svg";
import linkedinsvg from "../assets/SVG/linkedin-svgrepo-com (1).svg";
import { motion } from "framer-motion";

const desc =
  "A motivated Web Developer with passion in web development and continuous learning";
const containervar1 = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const containervar2 = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 3.5,
      staggerChildren: 0.5,
    },
  },
  exit: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const textvar = {
  initial: {
    y: "-150%",
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
    },
  },
  exit: {
    y: "-150%",
  },
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

const descvar = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const logovar = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: 50,
  },
};

const Home = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <motion.div
          className="flex flex-col w-auto gap-5 p-2 overflow-hidden font-mons md:w-1/2 lg:w-1/3"
          variants={containervar1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: "all" }}
          exit="exit"
        >
          <motion.p variants={textvar} className="text-sm font-light ">
            Hi, my name is
          </motion.p>
          <motion.p
            variants={textvar}
            className="text-center font-medium text-[40pt] lg:text-[60pt]"
          >
            Gama
          </motion.p>
          <motion.p
            variants={pvar}
            className="w-full text-base font-normal leading-relaxed text-center md:text-xl"
          >
            <span>
              {desc.split(" ").map((word, index) => (
                <motion.span
                  className={`inline-block mr-1 ${
                    word === "Web" || word === "Developer"
                      ? "font-semibold"
                      : ""
                  }`}
                  key={index}
                  variants={descvar}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.p>
        </motion.div>
        <motion.div
          className="flex gap-4 p-2 mt-4 overflow-hidden"
          variants={containervar2}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: "all" }}
        >
          <span className="transition duration-300 hover:scale-125">
            <a href="https://github.com/Gamamujur">
              <motion.img
                src={githubsvg}
                alt="GithubSVG"
                className="w-10"
                variants={logovar}
              />
            </a>
          </span>

          <span className="transition duration-300 hover:scale-125">
            <a href="https://www.linkedin.com/in/gama-mujur-024960228/">
              <motion.img
                src={linkedinsvg}
                alt="GithubSVG"
                className="w-10"
                variants={logovar}
              />
            </a>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

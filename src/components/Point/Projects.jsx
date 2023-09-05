import { motion } from "framer-motion";
import rightarrow from "../../assets/SVG/right-chevron-svgrepo-com.svg";
import { projects } from "../../assets/data";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const animatevar = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type:'spring',
        delay: 0.5,
        stiffness:50
      },
    },
    exit: {
      y: "100%",
    },
  };

  const navigate = useNavigate()
 const backnav = () =>{
  navigate(-1)
 }
  return (
    <div className="w-full h-full">
      <div className="pt-24">
        <motion.span
          className="flex items-center w-fit h-fit group hover:cursor-pointer"
          layoutId={3}
          transition={{ type: "spring", bounce: 0.2 }}
          onClick={()=>backnav()}
        >
          <img src={rightarrow} alt="Arrow" className="w-10 h-10" />
          <h1 className="text-[20pt] group-hover:scale-110 transition duration-300">Projects</h1>
        </motion.span>
      </div>

      <div className="flex flex-col items-center w-full h-[80vh] gap-8 p-2  lg:flex-row lg:justify-center overflow-scroll compcontainer leading-loose font-mons text-xs sm:text-sm sm:leading-loose">
        {projects.map((project, index) => (
          <motion.div
            variants={animatevar}
            initial="initial"
            animate="animate"
            exit="exit"
            key={index}
            className="w-full shadow-sm h-fit sm:h-full bg-neutral-100 text-slate-700 rounded-3xl compcontainer sm:max-w-md shadow-slate-600 lg:overflow-scroll"
          >
            <div
              className="w-full h-[250px]  bg-cover bg-center rounded-tl-2xl rounded-tr-2xl "
              style={{ backgroundImage: `url(${project.img})` }}
            />
            <button className="px-4 py-2 font-medium tracking-wider transition duration-300 font-mons bg-slate-500 text-slate-100 rounded-br-xl hover:bg-white hover:text-black">
              <a href={project.link}>Project Demo</a>
            </button>
            <div className="p-4 ">
              <span>{project.desc}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

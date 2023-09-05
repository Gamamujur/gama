import { tab } from "../assets/data";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()

   
  const trigger = (index) => {
    navigate(index)
    
  };
  return (
    <>
      <section className="fixed flex justify-center w-screen h-fit mt-7 md:mt-4 ">
        <div className="flex w-full sm:w-[70%] md:w-[50%] lg:w-[35%] rounded-3xl h-14  bg-slate-200 border-b-[1px] border-slate-300 justify-center space-x-2 py-3 backdrop-blur-sm shadow-black shadow-inner">
          {tab.map((tabs) => (
            <button
              className="w-[30%] md:w-[30%] rounded-[900px] text-sm font-medium relative flex justify-center items-center"
              key={tabs.id}
              
            >
              {location.pathname.includes(tabs.path) && (
                <motion.span layoutId="underline" className="absolute top-0 w-full h-full bg-white rounded-full shadow-sm lg:w-3/4 shadow-slate-700" transition={{ type:'spring', stiffness:120, damping:15 }}/>
              )}
              <span onClick={() => trigger(tabs.path)} className="relative font-medium text-black">{tabs.name}</span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Navigation;

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Profile from "./components/Point/Profile";
import Skills from "./components/Point/Skills";
import Projects from "./components/Point/Projects";
import Experience from "./components/Point/Experience";

function App() {

  const location = useLocation()


  return (
    <>
      <div className="w-screen h-screen">
        <Navigation/>
        <div className="w-full h-full compcontainer bg-slate-100">
          <AnimatePresence mode="wait">
            <Routes location={location.pathname} key={location.key}>
              <Route path="/" element={<Navigate to={'/home'} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About/>}/>
              <Route path="/experiences" element={<Experience/>}/>
              <Route path="/about/profile" element={<Profile/>}/>
              <Route path="/about/skills" element={<Skills/>}/>
              <Route path="/about/projects" element={<Projects/>}/>
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;

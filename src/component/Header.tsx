import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { motion } from "framer-motion";
import useThemeSwitcher from "../Hooks/useThemeSwitcher";
import {MoonIcon, SunIcon} from '../component/Icons';

const Header = () => {

    const [mode, setMode] = useThemeSwitcher();
  return <div>
    <div className="absolute top-0 left-0 w-full   ">
        {/* <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="12 0 1100 120"
          preserveAspectRatio="none"
          className=" relative block md:h-[150px] w-full h-[120px] duration-200 xl:h-[120px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className=" fill-[#3e3320]  dark:fill-[#F89600] "
          ></path>
          
        </svg> */}
      </div>
    <div className=" flex justify-between sticky top-0 items-start max-w-7xl mx-auto z-20 xl:items-center p-5 ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center gap-1 md:gap-3 text-gray-300 dark:text-white "
      >
        <a href="https://www.linkedin.com/in/bisrat-tegegne/">
          <AiFillLinkedin size={30} className="socialIcon hover:text-[#E76500] hover:scale-125 duration-200" />
        </a>
        <a href="https://github.com/bisrat-lab">
          <AiFillGithub size={30} className="socialIcon hover:text-[#E76500] hover:scale-125 duration-200" />
        </a>
        <a href="https://twitter.com/jaketrent">
          <AiOutlineTwitter size={30} className="socialIcon hover:text-[#E76500] hover:scale-125 duration-200" />
        </a>
      </motion.div>

      <motion.div
        className="flex flex-row items-center cursor-pointer text-gray-300 dark:text-white"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <span className="uppercase hidden md:inline-flex text-sm dark:text-white text-gray-400">
          Get in Touch
        </span>
        <button
          className=" hover:scale-125 duration-200 mx-5 dark:border dark:border-[#ffffff] border border-[#E76500] rounded-full p-1"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </motion.div>
    </div>
  </div>;
};

export default Header;

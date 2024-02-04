import { useState } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { width: windowWidth } = useWindowSize();

  return (
    <nav className="flex relative justify-between sm:items-center sm:gap-[1rem]">
      <a href="#">
        <img src="images/logo.svg" alt="logo" />
      </a>
      <motion.button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        whileTap={{ scale: 0.7 }}
        style={{ background: "none" }}
      >
        <img
          src="images/icon-hamburger.svg"
          alt="menu-button"
          className="sm:hidden"
        />
      </motion.button>
      <motion.div
        animate={
          windowWidth < 640
            ? {
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0,
                zIndex: isOpen ? 9999 : 1,
              }
            : { opacity: 1 }
        }
        transition={{ duration: 0.2 }}
        className={`bg-app-primary-dark-violet text-white opacity-0 rounded-[5px] py-[2rem] px-[1rem] max-w-[300px] sm:max-w-[none] right-0 text-center absolute w-[100%] top-[130%] font-[700] sm:static sm:bg-white sm:text-app-neutral-gray sm:flex sm:justify-between sm:px-0 sm:gap-[2rem] sm:py-0 sm:scale-[1] `}
      >
        <ul className="flex flex-col gap-[2rem] sm:gap-[1rem] pb-[2rem] sm:flex-row sm:items-center sm:pb-0">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-[2rem] pt-[2rem] sm:gap-[1rem] border-t-[1px] border-solid border-app-neutral-grayish-violet border-opacity-[0.4] sm:flex-row sm:pt-[0] sm:border-opacity-0 sm:items-center">
          <li>
            <a href="#">Login</a>
          </li>
          <li className="bg-app-primary-cyan mx-auto px-[2rem] py-[0.75rem] w-max rounded-full sm:text-white sm:px-[2rem]">
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;

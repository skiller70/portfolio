import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const mHidden = ` pb-2    hidden bg-black gap-2 md:hidden items-center flex-col text-white w-[100vw]`;
  const mDisplay = ` pb-2 flex gap-2 md:hidden items-center flex-col bg-black text-white`;
  const iconClose = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
  const iconOpen =  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
  const changeStyle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="   hidden     md:flex bg-black text-white  justify-center items-center  h-[11vh]">
        <div className="flex-grow"></div>
        <div className=" flex flex-grow bg-red-900 max-h-[20vh] mr-2">
          <p>heoos </p>
        </div>
        <div className=" bg-red-900 max-h-[20vh] mr-2">
          <p>heoos</p>
        </div>
        <div className=" bg-red-900 max-h-[20vh] mr-2">
          <p>heoos</p>
        </div>
        <div className=" bg-red-900 max-h-[20vh] mr-2">
          <p>heoos</p>
        </div>
      </div>
    


      <div className="w-full flex  md:hidden justify-end items-center h-[9vh] bg-black text-white">
        <div className="mr-[2%]">
          <motion.button animate={{rotate:open?360:0}} onClick={changeStyle}>
          
          {open?iconClose:iconOpen}
          
          </motion.button>
        </div>
      </div>

      <motion.div animate={{scale: open ? 1 : 0 }}  className={open ? mDisplay : mHidden}>
        <motion.div animate={{ x: open ? 0 : "100%" }} transition={{delay:0.2}}>Home</motion.div>
        <motion.div animate={{ x: open ? 0 : "-100%" }} transition={{delay:0.2}}>About</motion.div>
        <motion.div animate={{ x: open ? 0 : "100%" }} transition={{delay:0.2}}>Contact</motion.div>
        <motion.div animate={{ x: open ? 0 : "-100%" }} transition={{delay:0.2}}  >Help</motion.div>
      </motion.div>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faXmark} from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const mHidden = `  hidden  text-white`;
  const mDisplay = ` pt-2 text-[1.2rem] md:hidden text-white`;
  const iconClose = <FontAwesomeIcon className=" w-8 h-8" icon={faXmark} />;
  const iconOpen = <FontAwesomeIcon className=" w-8 h-8" icon={faBars} />;


  const changeStyle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className=" hidden font-Acme fixed w-full font-light opacity-150  z-10 shadow-lg md:flex  text-white  justify-center items-center  h-[11vh]">
        <div className=" w-[30%] "></div>
        <div className=" flex   justify-center  bg-[#f1f5f9] text-[#334155] w-[30%] p-2 rounded-2xl mr-2">
          <div className=" mr-4  font-bold text-[1.4rem]">
            <p>About</p>
          </div>
          <div className="  mr-4 font-bold  text-[1.4rem]">
            <p>Skills</p>
          </div>
          <div className=" mr-4 font-bold  text-[1.4rem]">
            <p>Project</p>
          </div>
          <div className="  mr-4 font-bold  text-[1.4rem]">
            <p>Contact </p>
          </div>
        </div>

        {/* RESPONSIVE NAVBAR */}
      </div>

      <div className="w-full flex-col    flex fixed justify-center font-bold  font-Acme  bg-[#0f172a] z-10  md:hidden   items-center  text-white">

        <div className="    justify-end  h-[8vh]  items-center  flex w-full mr-10">
          <div className="  ">
            <motion.button
              className=""
              animate={{ rotate: open ? 360 : 0 }}
              onClick={changeStyle}
            >
              {open ? iconOpen : iconClose}
            </motion.button>
          </div>
        </div>

        <div className={`flex  flex-col ${open?" pb-0 -mt-0 ":"-mt-12 pb-3"} justify-center items-center`}>

          <motion.div
            animate={{ x: open ? "100%" : 0 }}
            transition={{ delay: 0.2 }}
            className={open ? mHidden : mDisplay}
          >
            <Link  href="s">Home</Link>{" "}
          </motion.div>

          <motion.div
            animate={{ x: open ? "-100%" : 0 }}
            transition={{ delay: 0.2 }}
            className={open ? mHidden : mDisplay}
          >
            <Link href="s">About</Link>{" "}
          </motion.div>

          <motion.div
            animate={{ x: open ? "100%" : 0 }}
            transition={{ delay: 0.2 }}
            className={open ? mHidden : mDisplay}
          >
            <Link href="s">Skills</Link>{" "}
          </motion.div>

          <motion.div
            animate={{ x: open ? "-100%" : 0 }}
            transition={{ delay: 0.2 }}
            className={open ? mHidden : mDisplay}
          >
            <Link href="s">Project</Link>{" "}
          </motion.div>

          <motion.div
            animate={{ x: open ? "100%" : 0 }}
            transition={{ delay: 0.2 }}
            className={open ? mHidden : mDisplay}
          >
            <Link href="s">Contact</Link>{" "}
          </motion.div>

          {/* <Link href="s">About</Link>
        <Link href="s">Skills</Link>
        <Link href="s">Project</Link>
        <Link href="s">Contact</Link> */}
        </div>
      </div>
    </div>
  );
}

{
  /* <motion.butto
animate={{ scale: open ? 1 : 0 }}
className={open ? mDisplay : mHidden}
>
<motion.div
  animate={{ x: open ? 0 : "100%" }}
  transition={{ delay: 0.2 }}
>
  Home
</motion.div>
<motion.div
  animate={{ x: open ? 0 : "-100%" }}
  transition={{ delay: 0.2 }}
>
  About
</motion.div>
<motion.div
  animate={{ x: open ? 0 : "100%" }}
  transition={{ delay: 0.2 }}
>
  Contact
</motion.div>
<motion.div
  animate={{ x: open ? 0 : "-100%" }}
  transition={{ delay: 0.2 }}
>
  Help
</motion.div>
</motion.butto> */
}

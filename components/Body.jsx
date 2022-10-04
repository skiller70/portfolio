import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faMobile,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Body = ({ data }) => {
  return (
    <>
      {/* LANDING PAGE */}
      <div className="flex-col md:flex-row flex  h-auto md:h-[100vh]  ">
        <div className="flex mt-32  justify-center  items-center md:flex-grow">
          <div className=" p-2 md:p-0 mb-2 flex flex-col">
            <motion.h1
              initial={{ x: -360 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1 }}
              className=" font-title text-[2rem] m-0.5"
            >
              {" "}
              i am Lucky singh, a <br />
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: -500 }}
                transition={{ delay: 0.1 }}
                className="text-[4rem]   font-Secular text-[#581c87]"
              >
                web developer{" "}
              </motion.span>
            </motion.h1>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-1 p-2 rounded-xl self-start mb-2 bg-[#db2777] text-white"
            >
              {" "}
              <Link href="/about">
                <h2 className="font-Acme  font-bold text-[1.2rem] p-1.5">
                  Know More
                </h2>
              </Link>
            </motion.button>

            <p className="p-2 tracking-wide mt-3 font-semibold text-[#334155] font-Josefin md:p-0 text-[1.5rem]">
              i am Self taught programmer who is able to
              <br />
              realise projects from the ground up. <br /> I am well versed in
              javascript language and <br /> I dont give up until I solve the
              problem.
            </p>
          </div>
        </div>

        <div className="p-2 md:p-0 justify-center items-center flex md:flex-grow">
          <Image
            src="/finalLanding.jpg"
            alt="Picture of the author"
            width={500}
            height={400}
          />
        </div>
      </div>

      {/* ABOUT ME */}

      <div className=" flex flex-col  md:flex-row h-auto md:h-[100vh]   w-full">
        <div className="order-last md:order-first   justify-center flex items-center  md:pl-12 pl-0 ">
          <Image src="/about.jpg" width="600" height="450"></Image>
        </div>

        <div className="flex md:w-[50%] justify-center md:mt-[7%] ">
          <div className="">
            <h1 className="text-[2.5rem] text-center md:text-start ">
              About me
            </h1>
            <p className=" ">
              Hello, I’m a Patrick, web-developer based on Paris. <br />I have
              rich experience in web site design & building <br />
              and customization. Also I am good at
            </p>
          </div>
        </div>
      </div>

      {/* PROJECT IMAGE */}
      {/* <Image
          className=""
          src="/project.jpg"
          width="1500"
          height="800"
        ></Image> */}
      <div className="  flex flex-grow flex-row justify-center  text-[2rem] ">
        My Skills
      </div>

      <div className="flex  flex-col md:flex-row  h-auto md:h-[100vh]">
        <div className=" flex  flex-col  flex-grow">
          {/* 2BOX */}
          <div className="flex-col  mt-5 items-center flex-grow flex md:flex-row">
            <div className="w-[30%] flex justify-center ">
              <FontAwesomeIcon className="w-10 h-10" icon={faPaintBrush} />
            </div>
            <div className=" flex items-center flex-col mt-4 md:mt-0  font-Josefin tracking-wide font-semibold justify-center md:justify-start ">
              <div>
                <h1 className="text-center font-extrabold text-[1.2rem]">
                  Design + Development
                </h1>
              </div>
              <h1 className=" text-center md:text-start font-medium ">
                clean,modern design - optimized for performance
              </h1>
            </div>
          </div>

          <div className="flex-col     mt-5 font-Josefin tracking-wide font-semibold   justify-center  items-center flex-grow flex md:flex-row">
            <div className="w-[30%] flex justify-center ">
              <FontAwesomeIcon className="w-10 h-10" icon={faMobile} />
            </div>

            <div className="flex flex-col  mt-4 md:mt-0  font-Josefin tracking-wide  justify-center  items-center  md:justify-start w-[100%] md:w-[80%]">
              {" "}
              <div>
                {" "}
                <h1 className="text-center text-[1.2rem] font-extrabold ">
                  Always Responsive
                </h1> 
              </div>
              <h1 className=" text-center md:text-start font-medium ">
                A responsive design makes your website accessible <br /> to all
                users,regardless of their device.
              </h1>
            </div>
          </div>
          <div className="flex-col mt-5  justify-center items-center flex-grow flex md:flex-row">
            <div className="w-[30%] flex justify-center ">
              <FontAwesomeIcon className="w-10 h-10" icon={faCode} />
            </div>

            <div className=" flex flex-col text-start mt-4 md:mt-0 font-Josefin tracking-wide font-semibold  justify-center md:justify-start w-[100%] md:w-[80%] ">
              <div>
                {" "}
                <h1 className="text-center font-extrabold text-[1.2rem]">Technology </h1>
              </div>
              <h1 className=" text-center md:text-start font-medium ">
                Combined all the latest technology to a progressive website
              </h1>
            </div>
          </div>
        </div>

        {/*  image 2BOX */}

        <div className="flex-grow flex mt-8 md:mt-0  gap-y-3 md:gap-y-16  items-center flex-col  justify-center ">
          <div className="flex gap-x-2 md:gap-x-16    ">
            <Image src="/html.png" height="100" width="100"></Image>

            <Image src="/css.png" height="100" width="100"></Image>

            <Image src="/javascript.png" height="100" width="100"></Image>
          </div>
          <div className="flex gap-x-2 md:gap-x-16  ">
            <Image src="/bootstrap.png" height="110" width="110"></Image>

            <Image src="/reactjs.png" height="110" width="110"></Image>

            <Image src="/nextjs.png" height="110" width="110"></Image>
          </div>
          <div className="flex gap-x-2 md:gap-x-16  ">
            <Image src="/nodejs.png" height="110" width="110"></Image>

            <Image src="/expressjs.png" height="110" width="110"></Image>

            <Image src="/mongodb.png" height="110" width="110"></Image>
          </div>
        </div>
      </div>
      {/* PROJECT  */}
      <div className=" mt-2 justify-center items-center flex flex-col w-full h-[60vh]">
        <div>
          <h1 className="text-[2rem] m-2 ">My Project</h1>
        </div>

        <div className="flex flex-col md:flex-row border-2 self-start   w-[100%]  ">
          <div className=" flex justify-center md:w-[50%]  ">
            {" "}
            <Image src="/social.jpg" height="250" width="250"></Image>
          </div>
          <div className=" m-2 flex justify-center items-center">
            {" "}
            <h1>asdasdasdasasdasdasdasdasdasdasdasdasd</h1>
          </div>
        </div>
      </div>

      <div className=" flex-col flex bg-red-200 md:flex-row h-[60vh]">
        <div className="flex justify-center items-center gap-8  border-2 flex-col md:w-[50%] ">
          <input className="w-[50%] h-10"></input>
          <input className="w-[50%] h-10"></input>
          <input className="w-[50%] h-10"></input>
        </div>

        <div className="  flex flex-grow border-red-800 border-2 justify-center items-center  ">
          <textarea className="h-[50%] w-[50%]"></textarea>
        </div>
      </div>

      {/* FOOTER */}
      <div className=" flex p-5 bg-slate-700 h-[30vh] flex-col md:flex-row">
        <div className=" md:w-[30%]  gap-5 flex justify-center items-center">
          <Link href="https://www.facebook.com/skiller70/">
            <button>
              {" "}
              <FontAwesomeIcon
                className="w-9 h-9 text-white"
                icon={faFacebook}
              />
            </button>
          </Link>

          <Link href="https://github.com/skiller70">
            <button>
              {" "}
              <FontAwesomeIcon className="w-9 h-9 text-white" icon={faGithub} />
            </button>
          </Link>

          <Link href="https://www.instagram.com/luckyskiller/?hl=en">
            <button>
              {" "}
              <FontAwesomeIcon
                className="w-9 h-9 text-white"
                icon={faInstagram}
              />
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Body;

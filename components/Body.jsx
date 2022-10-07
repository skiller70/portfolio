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
      <div className="flex-col md:flex-row flex    h-auto  md:h-[80vh]  ">
      
          
          <div className=" md:text-start text-center mt-20 md:mt-0 justify-center items-center  w-[100%] md:w-[50%] flex flex-col">
            <motion.h1
              initial={{ x: -360 }} 
              animate={{ x: 0 }}
              transition={{ delay: 0.1 }}
              className=" px-1 md:px-0 font-title tracking-tighter text-[#334155] text-[2rem]"
            >
              {" "}
              i am Lucky singh,a <br />
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: -500 }}
                transition={{ delay: 0.1 }}
                className="text-[3rem]  text-center md:text-start tracking-wider font-Secular text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                web developer{" "}
              </motion.span>
            </motion.h1>

          <div className=" md:-ml-16">
          <motion.button  
              initial={{ scale: 0 }}  
              animate={{ scale: 1 }}
              className="py-0.5 rounded-xl   bg-indigo-500 hover:bg-[#db2777] text-white"
            >
              {" "}
              <Link href="/about">
                <h2 className="font-Secular px-5   text-[1.5rem] py-1.5">
                  Contact
                </h2>
              </Link>
            </motion.button>
            
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className=" rounded-xl py-0.5 ml-5  bg-indigo-500 hover:bg-[#db2777] text-white"
            >
              {" "}
              <Link href="/about">
                <h2 className=" font-Secular  px-2.5    text-[1.5rem] py-1.5">
                  Know More
                </h2>
              </Link>
            </motion.button>
          </div>

     
            <p className="p-2   tracking-wide mt-3 font-semibold text-[#334155] font-Josefin md:p-0 text-[1.5rem]">
              front-end, back-end (MERN stack)
              <br />
             
            </p>
          </div>
      

        <div className="  pt-5 md:pt-12  px-5 md:px-0 justify-center items-center flex md:flex-grow">
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

        <div className="flex flex-col md:w-[50%] justify-start md:mt-[7%] ">
          
            <h1 className=" pt-6 text-[2.5rem] text-[#334155] text-center md:text-start font-Secular ">
              About me
            </h1>
            

           
            <p className=" text-center md:text-start p-5 font-Josefin font-semibold text-[#334155]  tracking-wide text-[1.5rem] ">
              I am a self taught (mostly). <br /> I love learning new technology
            and also  <br />  i build good foundation of full stack Development. <br />
              I have more than 6 year experience in basic computer software and
              hardware. <br />I have spent a lots of time in cyber cafe
            </p>
            
        
        </div>
      </div>

      {/* PROJECT IMAGE */}
      {/* <Image
          className=""
          src="/project.jpg"
          width="1500"
          height="800"
        ></Image> */}
      <div className="pt-6 pb-3  text-[#334155] font-Secular flex flex-grow flex-row justify-center  text-[2.5rem] ">
        My Skills
      </div>

      <div className="flex flex-col md:flex-row  h-auto md:h-[100vh]">
        <div className=" flex   flex-col  flex-grow">
          {/* 2BOX */}
          <div className="flex-col     mt-5 font-Josefin tracking-wide font-semibold  justify-center  items-center flex-grow flex md:flex-row">
            <div className=" flex flex-grow  justify-center ">
              <FontAwesomeIcon className="w-10 h-10" icon={faPaintBrush} />
            </div>
            <div className=" flex flex-col  mt-4 md:mt-0  font-Josefin tracking-wide flex-grow justify-center  items-center  md:justify-start   ">
              
                <h1 className="text-center mb-2 text-[#334155]  font-light  font-Secular text-[1.2rem]">
                  Design + Development
                </h1>
              
              <h1 className="text-[1.3rem]  text-center  text-[#475569]  md:text-start font-semibold ">
                clean,modern design - optimized for performance.
              </h1>
            </div>
          </div>

          <div className="flex-col     mt-5 font-Josefin tracking-wide font-semibold   justify-center  items-center flex-grow flex md:flex-row">
            <div className=" flex flex-grow justify-center ">
              <FontAwesomeIcon className="w-10 h-10" icon={faMobile} />
            </div>

            <div className="flex flex-col  mt-4 md:mt-0  font-Josefin tracking-wide flex-grow justify-center  items-center  md:justify-start   ">
              {" "}
              <div>
                {" "}
                <h1 className=" mb-2  text-center text-[1.4rem]  text-[#334155]  font-light  font-Secular  ">
                  Always Responsive
                </h1>
              </div>
              <h1 className="text-[1.3rem]  text-center text-[#475569] md:text-start font-semibold ">
                A responsive design makes your website accessible <br /> to all
                users,regardless of their device.
              </h1>
            </div>  
          </div>

          <div className="flex-col mt-5  justify-center items-center flex-grow flex md:flex-row">
            <div className="flex-grow flex justify-center ">
              <FontAwesomeIcon className="w-10 h-10" icon={faCode} />
            </div>

            <div className=" flex flex-col  mt-4 md:mt-0  font-Josefin tracking-wide flex-grow justify-center  items-center  md:justify-start  ">
              <div>
                {" "}
                <h1 className="  mb-2 text-center text-[1.5rem]  text-[#334155]  font-light  font-Secular ">
                 Technology{" "}
                </h1>
              </div>
              <h1 className=" text-[1.3rem] text-center text-[#475569] md:text-start font-semibold">
                Combined all the latest technology to a progressive <br /> website.
              </h1>
            </div>
          </div>
        </div>

        {/*  image 2BOX */}

        <div className="flex-grow flex mt-8 md:mt-0  gap-y-3 md:gap-y-16  items-center flex-col  justify-center ">
          <div className="flex gap-x-5 md:gap-x-16    ">
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
      <div className=" mt-2 justify-center items-center flex flex-col w-full h-auto">
        <div>
          <h1 className="text-[2.5rem] text-[#334155]  font-Secular m-2 ">My Project</h1>
        </div>

        <div className="flex flex-col md:flex-row self-start  w-[100%]  ">
        <div className=" m-2 flex text-center flex-col justify-center md:w-[50%] ">
            {" "}
            <h1 className="text-[1.5rem]  font-Secular text-[#334155]">Blog App</h1> 
            <h1 className="text-center text-[1.3rem] font-Josefin tracking-wide  font-semibold text-[#334155]  "> <br />
            
            MERN stack app where a user can creates an account and upload blog posts and comments/likes on the post i have create this project without any route. the whole process just on single page 
            </h1>
            <div className="text-[#334155]  font-light pt-2 font-Secular hover:text-blue-500  ">
            <Link href="https://main--remarkable-macaron-2714af.netlify.app/"  > Click here to see live project </Link>
            </div>
          </div>
          
          <div className=" flex justify-center flex-grow   "> 
            {" "}
            <Image src="/social.jpg" height="300"  width="400"></Image>
          </div>
        
        </div>
      </div>
{/* INPUT */}
      <div className=" flex-col flex bg-[#cbd5e1] md:flex-row h-[60vh]">
        <div className="flex mt-5 justify-center items-center gap-8   flex-col md:w-[50%] ">
          <input placeholder="Your Name" className="w-[50%] rounded-2xl pl-5  placeholder:text-center h-10"></input>
          <input placeholder="Your Email"  className="w-[50%] h-10 rounded-2xl pl-5   placeholder:text-center"></input>
          <input placeholder="Contact No"  className="w-[50%] h-10 rounded-2xl pl-5  placeholder:text-center"></input>
        </div>

        <div className="  flex  flex-col flex-grow  justify-center items-center  ">
          <textarea placeholder="message" className="h-[50%] pl-5 pt-2 w-[60%] rounded-2xl md:mt-20 placeholder:text-center placeholder:pt-2"></textarea>
            <button className=" mt-5 rounded-xl bg-[#db2777] hover:bg-indigo-500 font-Secular text-white px-7 py-1">Send</button>
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
        <div className="flex flex-grow justify-center flex-col items-center  ">
          <h1 className=" text-[1.2rem]  text-white font-Secular"> Getting touch is easy!</h1>
          <h1 className="text-white font-Josefin"> singhlucky007007@gmail.com</h1>
          <h1 className="text-white  font-Josefin"> +919137068283 </h1>

        </div>
      </div>
    </>
  );
};

export default Body;

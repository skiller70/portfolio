import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Body = ({ data }) => {
  return (
    <div>
      {/* LANDING PAGE */}
      <div className="flex-col md:flex-row flex w-full h-[100vh] ">
        <div className="flex  justify-center  items-center md:flex-grow">
          <div className=" p-2 md:p-0 mb-2 flex flex-col">
            <motion.h1
              initial={{ x: -360 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1 }}
              className=" text-[2rem] m-0.5"
            >
              {" "}
              i am karthik singh, a <br />
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: -500 }}
                transition={{ delay: 0.1 }}
                className="text-[3rem]  text-[#360a3d]"
              >
                web developer{" "}
              </motion.span>
            </motion.h1>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-1 p-2 rounded-xl self-start mb-2 bg-pink-500 text-white"
            >
              {" "}
              <Link href="/about">Know more</Link>
            </motion.button>

            <p className="p-2 md:p-0">
              Self taught front end and backend developer <br /> who is able to
              realise projects from the ground up. <br /> I am well versed in
              javascript language and <br /> I don't give up until I solve the
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

      <div className=" mt-[35%] md:mt-[-8%] flex flex-col  md:flex-row     h-[100vh] w-screen">
        <div className="order-last md:order-first   justify-center flex items-center  md:pl-12 pl-0 ">
          <Image src="/aboutMe.png" width="500" height="450"></Image>
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

      <div className="w-full border-red-500 border-2 h-[50vh]">
        <div className="border-2">
          <div className="flex">
            <svg
              className=" w-[3rem] h-[3rem]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
              />
            </svg>
            <h1>asdasd</h1>
          </div>
          <div className="flex">
            <svg
              className=" w-[3rem] h-[3rem]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>

            <h1>asdasdasd</h1>
          </div>
          <div className="flex">
            <svg
                className=" w-[3rem] h-[3rem]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>

      
        </div>


        <div>
          <div>
          <Image></Image>
          </div>
          <div>
            
            </div>
            <div>
            
            </div>



        </div>
      </div>
    </div>
  );
};

export default Body;

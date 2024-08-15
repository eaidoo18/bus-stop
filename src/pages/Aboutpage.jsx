import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import team from '../assets/team.png'
import collab from '../assets/collab.png'

const Aboutpage = () => {
  return <>
  
  <div className="mt-[70px] h-fit">
      <div className="w-full h-[180px] bg-teal-700 about-card relative flex justify-center items-center">
        <h2 className="text-black z-10  text-4xl  font-extrabold absolute  ">
          About Us
        </h2>
      </div>
      <div className="text-center py-10 px-44 max-[768px]:px-4">
        <h3 className="mb-3 text-3xl font-bold">Who are we ? We are Bus-stop</h3>
        <p className="text-neutral-500 font-medium">
          Your ultimate destination for seamless and reliable bus rentals. We
          pride ourselves on our extensive fleet, exceptional customer service,
          and unwavering commitment to making your journey smooth and memorable.
        </p>
      </div>
      <div className="flex flex-col justify-center h-fit items-center">
        <img 
          src={team}
          alt="hero-background" 
          width={600} 
          height={600}
          />
        <p className="mt-3 text-3xl font-bold px-44 max-[768px]:px-4 text-center">
            We aim to provide accessible and affordable services to our clients.
        </p>
      </div>

      <div className="flex mt-28 w-full h-fit max-[768px]:flex-col">
        <div className="w-1/2 flex justify-center max-[768px]:w-full ">
          <img
            src={collab}
            alt="about-image"
            className="w-[400px] h-[400px] object-cover shadow-lg rounded-lg"
          />
        </div>
        <div className="w-1/2 p-4 flex flex-col gap-7 max-[768px]:w-full max-[768px]:justify-center max-[768px]:items-center">
          <h2 className="text-2xl font-extrabold">About Company</h2>
          <h3 className="text-3xl font-extrabold pr-8 max-[768px]:text-center">
            You start the engine and your adventure begins
          </h3>
          <p className="text-base pr-28 font-medium text-gray-500 p-1 max-[480px]:pr-4 max-[768px]:text-center max-[768px]:pr-5 ">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <button className="py-2 px-4 w-fit rounded-md flex justify-center items-center gap-2 bg-blue-600 text-white  max-[768px]:ml-auto  max-[768px]:mr-auto  max-[768px]:mt-4">
            Learn More <MdArrowForwardIos size={18} />
          </button>
        </div>
      </div>
      <div className="w-full h-48 bg-neutral-800 flex flex-col justify-center items-center gap-y-6 mt-36">
        <p className="text-4xl font-extrabold flex gap-10 text-white max-[768px]:text-3xl max-[768px]:text-center ">
          Book a bus by getting in touch with us.
          {/* <span className="text-blue-600 flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            (+91) 9347171539 
          </span> */}
        </p>
      </div>
    </div>
  </>
}

export default Aboutpage
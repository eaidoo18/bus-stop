import React from 'react'
import carimgz from '../assets/carimgz.png'
import teal from '../assets/teal.png'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { MdArrowForwardIos } from 'react-icons/md'



const Hero = () => {
  return<>
   <div className="w-full h-[100vh] flex">
      <div className="flex flex-col  gap-y-5 px-[4rem] h-full justify-center  max-[460px]:w-screen">
        <h3 className="font-bold text-2xl ml-[.5rem]  max-[768px]:text-center max-[460px]:w-auto">Book your trip now</h3>
        <span className="text-[3rem] w-full font-bold max-[768px]:text-center max-[460px]:text-[2.1rem] ">
          Save <span className="text-teal-700">more</span> with our bus rental.
        </span>
        <p className="text-neutral-700 font-medium max-[768px]:text-center mb-3 max-[460px]:w-full max-[460px]:">
          Rent our buses at  Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>

        <div className="flex gap-x-4 max-[768px]:flex max-[768px]:justify-center max-[460px]:flex-col gap-2 ">
          <button className="border py-2 px-5 rounded-md flex justify-center items-center gap-2 bg-teal-600 text-white">
            Book Ride <IoIosCheckmarkCircleOutline size={20} />{" "}
          </button>
          <button className="py-2 px-4 rounded-md flex justify-center items-center gap-2 bg-black text-white hover:border border-black hover:bg-white transition hover:text-black">
            Learn More <MdArrowForwardIos size={18} />{" "}
          </button>
        </div>
      </div>
      <div className="relative overflow-x-hidden w-full h-full max-[768px]:hidden ">
        <img
          src={carimgz}
          alt="hero"
          className="w-[400ppx] h-[400px] object-contain mt-[6rem] "
          width={900}
          height={500}
        />
        <img
        //   src={teal}
          alt="hero"
          fill
          className="w-[850px] h-[590px]  absolute top-[-6rem] left-[10rem] -z-10"
        />
      </div>
    </div>
  </>
}

export default Hero
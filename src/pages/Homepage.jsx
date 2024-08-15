import React from 'react'
import ContactS from '../assets/ContactS.png'
import LetsDrive from '../assets/LetsDrive.png'
import Location from '../assets/Location.png'
import kwamez from '../assets/kwamez.png'
import quans from '../assets/quans.png'
import Hero from '../components/Hero'
 

const Homepage = () => {
  return <>
  <div className="overflow-hidden">
     <Hero/>

      {/* <UserForm /> */} 
      <div className="my-32 support max-[768px]:mt-1">
        <h3 className="text-center text-2xl font-bold mb-2">Plan your Tour with Us  </h3>
        <p className="text-center text-4xl font-bold">Swift & easy bus rental</p>

        <div className="flex w-full mt-16 gap-x-4 max-[768px]:flex-col max-[768px]:gap-y-10  ">
          <div className="flex flex-col justify-center items-center gap-y-3">
            <img
              src={LetsDrive}
              alt="section"
              className=""
              width={150}
              height={150}
            />
            <h3 className="font-bold text-2xl mt-2">Select car</h3>
            <p className="w-2/3 text-neutral-700 text-center text-sm">
              We offers a wide  range of buses for all your trips and tours. 
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-3 text-neutral-700">
            <img
              src={ContactS}
              alt="section"
              className=""
              width={150}
              height={150}
            />
            <h3 className="font-bold text-2xl mt-2">Contact Support</h3>
            <p className="w-2/3 text-neutral-700 text-center text-sm">
              Our friendly operators are always ready to help
              with any questions or concerns regarding services
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-3 text-neutral-700">
            <img
              src={Location}
              alt="section"
              className=""
              width={150}
              height={150}
            />
            <h3 className="font-bold text-2xl mt-2">Let's Drive</h3>
            <p className="w-2/3 text-neutral-700 text-center text-sm">
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </div>

      {/* <CarDetails /> */}

      <div className="w-full h-48 bg-gray-950 flex flex-col justify-center items-center gap-y-6 mt-36">
        <p className="text-6xl font-extrabold text-white max-[768px]:text-3xl max-[768px]:text-center ">Save more with our affordable price rates!</p>
        <h3 className="text-2xl text-white max-[768px]:text-[1.2rem] ">Providing<span className="text-teal-700">24/7</span> bus availablity for all your tours.</h3>
      </div>

      {/* <FindDetails /> */}


      <div className="mt-24 bg-gray-100 ">
        <div className="w-1/2  block m-auto text-center pt-24 max-[768px]:w-full">
          <h3 className="text-2xl font-bold mb-2">Reviews</h3>
          <p className="text-4xl font-extrabold mb-4">Client Testimonials</p>
          <p className="font-semibold text-neutral-500 mb-5  max-[768px]:px-5">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        </div>

        <div className="flex gap-x-10 mt-16 px-32 pb-24  max-[768px]:flex-col max-[768px]:px-6 max-[768px]:gap-y-6">
          <div className="card">
            <p className='font-medium  py-5'>"We rented a bus  from this website and had an amazing work. The booking was easy and the rental rates were affordable. "</p>
            <div className="sub-card">
              <div className="person-card">
                <img 
                 src={quans} 
                alt="person" 
                width={70} 
                height={70} 
                className=" rounded-full object-contain" />
                <h3>Emmanuel</h3>
              </div>
             
            </div>
          </div>
          <div className="card ">
            <p className='font-medium py-5'>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
            <div className="sub-card">
              <div className="person-card">
                <img 
                src={kwamez}
                 alt="person"
                  width={70}
                   height={70}
                    className="rounded-full object-contain" />
                <h3 >Quansah</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
      <div className="w-1/2  block m-auto text-center pt-24 max-[768px]:w-full">
          <h3 className="text-2xl font-bold mb-2">FAQ</h3>
          <p className="text-4xl font-extrabold mb-4">Frequently Asked Questions</p>
          <p className="font-semibold text-neutral-500 mb-5  max-[768px]:px-5">Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>

        {/* <Accordion /> */}


        <div className="flex gap-x-2 justify-center items-center bg-gray-100 h-[90vh] ">
          <div className="w-1/2 flex flex-col gap-y-4 px-12 ml-4 mt-16  max-[768px]:w-full  max-[768px]:gap-y-12 ">
            <h3 className="text-4xl font-extrabold leading-[3rem]">Download our app to get most out of it</h3>
            <p className="text-[.8rem] text-neutral-600">Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
            <div className="flex gap-x-5 ">
              <img 
            //   src={apple} 
              alt="app-store " 
              width={150}
               height={150} />
              <img 
            //   src={google} 
              alt="app-store " 
              width={150}
               height={150} />
            </div>
          </div>
          <div className="relative top-[10rem] max-[768px]:hidden">
            <img 
            // src={copy} 
            alt="copy of a image which is confidiental" 
            width={800} 
            height={800} />
          </div>
        </div>
      </div>

    </div>
  </>
}

export default Homepage
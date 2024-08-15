import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



const Navbar = () => {


  const[nav, setNav] = useState(false);
  const[isloggenIn, setIsloggedIn] = useState(false)


  const handleNav = () =>{
    setNav(!nav);
  }

  const handlelogin = () =>{
    setIsloggedIn(true)
  }
  
  const handlelogout = () =>{
    setIsloggedIn(true)
  }


const navListbeforeLogin = [
  {id:1,text:'Home'},
  {id:2,text:'Login'},
  {id:3,text:'Register'},
]

const navListatferLogin = [
  {id:4,text:'Dashboard'},
  {id:5,text:'Profile'},
  {id:6,text:'Logout'},
]



  return<>
  <nav className = "w-full h-[50px] absolute top-0 left-0 z-50 bg-teal-50">
     
{isloggenIn ? (<ul className='hidden md:flex justify-center w-full'>
  <img/>
  {navListatferLogin.map((item) =>(
    <li key={item.id} className='mr-6 font-bold p-4 '>
      <a href='#' className='text-black  '>{item.text}</a>
    </li>
  ))}
</ul>):(
  <ul className='hidden md:flex justify-between w-full'>
    {navListbeforeLogin.map((item) =>(
      <li key={item.id} className='mr-6 font-bold p-4'>
         <a href='#' className='text-black'>{item.text}</a>
      </li>
    ))}
  </ul>
)}


<div className="md:hidden flex justify-center w-full" onClick={handleNav}>
  
    {nav ? <AiOutlineClose/> : <AiOutlineClose/>}
</div>


{nav && (
  <ul className='flex flex-col justify-center w-full'>
{isloggenIn ? (
  navListatferLogin.map((item) =>(
   <li key={item.id} className='mr-6 font-bold p-4'>
     <a href='#' className='text-green-600'>{item.text}</a>
    </li>
  ))
):(
  navListbeforeLogin.map((item)=>(
    <li key={item.id} className='mr-6 font-bold p-4'>
    <a href='#' className='text-green-600'>{item.text}</a>
   </li>
  ))
)}
</ul>
)}

  </nav>
  </>
}
export default Navbar
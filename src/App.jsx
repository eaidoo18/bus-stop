import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Footer from './components/Footer'


const App = () => {
  return <>
  <div className="main">
    
    <Routes>
       <Route path ='/' element = {<Homepage/>}/>
       <Route path ='/about' element = {<Aboutpage/>}/>

    </Routes>
    <Footer/>
  </div>


  </>
}

export default App
import React from 'react'
import { TfiFiles } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiSettings,CiTimer } from "react-icons/ci";
import Header from './header';
const Home = () => {
  return (
    <>
    <Header/>
    <div id='side'>
      <div className='header'> Admin Name</div>
       
       <div className="sidebar">
        <div className='a-div'>
  <a href="#home" id='a'><TfiFiles className='icn'/> My Files</a>
  </div>
  <div className='a-div'>
  <a href="#services" id='a1'> <CiTimer className='icn1'/>Recent</a>
  </div>
  <div className='a-div'>
  <a href="#clients" id='a2'><CiSettings className='icn2'/>Setting</a>
  </div>
  <div className='a-div'>
  <a href="#contact" id='a3'><RiDeleteBin6Line className='icn3'/> Recycle Bin </a>
  </div>
</div>
<div className='storage'>
    Storage
</div>
      </div>
    </>
  )
}

export default Home

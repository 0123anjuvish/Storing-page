import { CiSettings, CiTimer } from "react-icons/ci";
import { RiCloudy2Fill, RiDeleteBin6Line } from "react-icons/ri";

import Header from './header';
// import Main from './Pages/main';
import PrgBar from './Pages/progress';
import React from 'react';
import { TfiFiles } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <>      
      {/* <Main /> */}
      <div id='side'>
        <div className='header'> Admin Name</div>
        <div className="sidebar">
          <div className='a-div'>
            <TfiFiles className='icn'/>
            <a href="#home" id='a'> My Files</a>
          </div>
          <div className='a-div1'>
            <CiTimer className='icn1'/>
            <a href="#services" id='a1'> Recent</a>
          </div>
          <div className='a-div2'>
            <CiSettings className='icn2'/>
            <a href="#clients" id='a2'>Setting</a>
          </div>
          <div className='a-div3'>
            <RiDeleteBin6Line className='icn3'/>
            <a href="#contact" id='a3'> Recycle Bin </a>
          </div>
        </div>
        <div className='storage'>
          <RiCloudy2Fill className='str-icn'/>
          <span className='store'>Storage</span>
          <div className='prg'>
            <PrgBar value={20} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

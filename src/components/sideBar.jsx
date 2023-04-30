import { CiSettings, CiTimer } from "react-icons/ci";
import { RiCloudy2Fill, RiDeleteBin6Line } from "react-icons/ri";

// import Main from './Pages/main';
import PrgBar from './Pages/progress';
import React from 'react';
import { TfiFiles } from "react-icons/tfi";
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();



 const handleMyfile = () => {   
  const queryParams = new URLSearchParams(location.search);
  queryParams.set('folder',"")
  window.location.href = '/home';
 }

  
  return (
    <>      
      {/* <Main /> */}
      <div id='side'>
        <div className='header'> Admin Name</div>
        <div className="sidebar">
          <div className='a-div'>
            <TfiFiles className='icn'onClick={handleMyfile}/>
            <a onClick={handleMyfile} id='a'>MYFOLDERS</a>
          </div>
          <div className='a-div1'>
            <CiTimer className='icn1'/>
            <a href="#services" id='a1'> RECENT</a>
          </div>
          <div className='a-div2'>
            <CiSettings className='icn2'/>
            <a href="#clients" id='a2'>SETTINGS</a>
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

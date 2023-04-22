// import React,{useState} from 'react';
// import './style.css';
// import logo from '../images/logo.png';
// import { CiSearch } from "react-icons/ci";
// import { RiArrowDownSLine,RiUploadCloud2Line,RiFolderAddLine} from "react-icons/ri";
// import Modal from './Pages/Modal';
// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false); 
//   const [selectedOption, setSelectedOption] = useState(''); 

 
//   const handleDropdownClick = () => {
//     setIsOpen(!isOpen); 
//   };

 
//   const handleOptionSelect = (option) => {
//     // setSelectedOption(option); 
//     setIsOpen(false);
//   };

//   return (
//    <>
//   <div id='nav'>
    
//     <img src={logo} alt='logo'/>
//   <input type='search' id='inp' placeholder='Search anything...'/>
//    <button type='search' id='bt' ><CiSearch className='srch'/></button>
//    <button id="bt-ad">admin</button>
//   </div>
 
//   <div id='main'>
//     <button className='crt'><Modal/></button>
//     <button type='add' className='crt'>Create
//     <span><RiFolderAddLine className='fld' /></span>
//     </button>
    
//     <button onClick={handleDropdownClick} className='upld'>
   
//     Upload
//     <span> <RiUploadCloud2Line className='ld' /></span>
//     </button>
//       {isOpen && ( 
//         <div className='dpdwn'>
//           <button onClick={() => handleOptionSelect('files')} className='dd-btn'>Files</button>
//           <button onClick={() => handleOptionSelect('folders')} className='dd-btn'>Folders</button>
//         </div>
//       )}
    

//   </div>
 
//    </>
//   )
// }


// export default Header;


// Header.js

import React, { useState } from 'react';
import './style.css';
import logo from '../images/logo.png';
import { CiSearch } from "react-icons/ci";
import { RiUploadCloud2Line, RiFolderAddLine } from "react-icons/ri";
import Modal from './Pages/Modal';
import Create from './Pages/createFolder';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFileClick = (fileName) => {
    setSelectedOption({ type: 'file', fileName });
    setIsDropdownOpen(false);
    setIsOpen(true);
  }

  const handleFolderClick = (folderName) => {
    setSelectedOption({ type: 'folder', folderName });
    setIsDropdownOpen(false);
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setSelectedOption(null);
    setIsOpen(false);
  }

  return (
    <>
      <div id='nav'>

        <img src={logo} alt='logo' />
        <input type='search' id='inp' placeholder='Search anything...' />
        <button type='search' id='bt' ><CiSearch className='srch' /></button>
        <button id="bt-ad">admin</button>
      </div>

      <div id='main'>
        <button type='add' className='crt'><Create/>
          <span><RiFolderAddLine className='fld' /></span>
        </button>

        <button onClick={handleDropdownClick} className='upld'>
          Upload
          <span> <RiUploadCloud2Line className='ld' /></span>
        </button>
        
        {isDropdownOpen && (
          <div className='dpdwn'>
            <button onClick={() => handleFileClick('file')} className='dd-btn'>File </button>
            {/* <button onClick={() => handleFileClick('file2')} className='dd-btn'>File 2</button> */}
            <button onClick={() => handleFolderClick('folder')} className='dd-btn'>Folder</button>
            {/* <button onClick={() => handleFolderClick('folder2')} className='dd-btn'>Folder 2</button> */}
          </div>
        )}

      </div>

      {isOpen && selectedOption && (
        <Modal
          type={selectedOption.type}
          name={selectedOption.fileName || selectedOption.folderName}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default Header;



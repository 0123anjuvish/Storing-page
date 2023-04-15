import React,{useState} from 'react';
import './style.css';
import logo from '../images/logo.png';
import { CiSearch } from "react-icons/ci";
import { RiArrowDownSLine,RiUploadCloud2Line,RiFolderAddLine} from "react-icons/ri";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState(''); 

 
  const handleDropdownClick = () => {
    setIsOpen(!isOpen); 
  };

 
  const handleOptionSelect = (option) => {
    // setSelectedOption(option); 
    setIsOpen(false);
  };

  return (
   <>
  <div id='nav'>
    <img src={logo} alt='logo'/>
  <input type='search' id='inp' placeholder='Search anything...'/>
   <button type='search' id='bt' ><CiSearch className='srch'/></button>
   <button id="bt-ad">admin</button>
  </div>
 
  <div id='main'>
    <button type='add' className='crt'>Create
    <span><RiFolderAddLine className='fld' /></span>
    </button>
    
    <button onClick={handleDropdownClick} className='upld'>
   
    Upload
    <span> <RiUploadCloud2Line className='ld' /></span>
    </button>
      {isOpen && ( 
        <div className='dpdwn'>
          <button onClick={() => handleOptionSelect('files')} className='dd-btn'>Files</button>
          <button onClick={() => handleOptionSelect('folders')} className='dd-btn'>Folders</button>
        </div>
      )}
    

  </div>
 
   </>
  )
}


export default Header;

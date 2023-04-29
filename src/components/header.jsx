import React, { useState } from "react";
import "./style.css";
import logo from "../images/logo.png";
import { CiSearch } from "react-icons/ci";
// import { MdArrowDropDownCircle } from "react-icons/md";
import { RiUploadCloud2Line, RiFolderAddLine } from "react-icons/ri";
import Modal from "./Pages/Modal";
import Create from "./Pages/createFolder";
import Main from "./Pages/main";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isDpdnOpen, setIsDpdnOpen] = useState(false);
  // const handleDpdnClick = () => {
  //   setIsDpdnOpen(!isDpdnOpen);
  // };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFileButtonClick = () => {
    setIsOpen(true);
    setSelectedOption("file");
  };

  const handleFolderButtonClick = () => {
    setIsOpen(true);
    setSelectedOption("folder");
  };

  return (
    <>
      <div id="nav">
        <img src={logo} alt="logo" />
        <input type="search" id="inp" placeholder="Search anything..." />
        <button type="search" id="bt">
          <CiSearch className="srch" />
        </button>
        <button id="bt-ad">admin</button>
      </div>

      <div id="main"> 
        <div id="main-head">
        <button type="add" className="crt">
          <Create />
          <span>
            <RiFolderAddLine className="fld" />
          </span>
        </button>

        <button onClick={handleDropdownClick} className="upld">
          Upload
          <span>
            <RiUploadCloud2Line className="ld" />
          </span>
        </button>

        {isDropdownOpen && (
          <div className="dpdwn">
            <button onClick={handleFileButtonClick} className="dd-btn">
              File
            </button>
            <button onClick={handleFolderButtonClick} className="dd-btn">
              Folder
            </button>
          </div>
        )}

        {/* <button onClick={handleDpdnClick} className='sort'>
         Sort
          <span><MdArrowDropDownCircle className='srt' /></span>
        </button>

        {isDpdnOpen && (
          <div className='dpdn'>
            <button  className='dd1-btn'>by-name</button>
            <button className='dd1-btn'>by-size</button>
            <button className='dd1-btn'>by-date</button>
          </div>
        )} */}

        <Modal isOpen={isOpen} setIsOpen={setIsOpen} type={selectedOption} />
       
        </div>
      </div>
      
      <Main/>
    </>
  );
};

export default Header;

import "./style.css";

import { CiLogout, CiSearch } from "react-icons/ci";
import React, { useState } from "react";
// import { MdArrowDropDownCircle } from "react-icons/md";
import { RiFolderAddLine, RiUploadCloud2Line } from "react-icons/ri";

import Create from "./Pages/createFolder";
import Main from "./Pages/main";
import Modal from "./Pages/Modal";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
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

  const handleLogout = () => {
    localStorage.setItem("login", "false");
    window.location.href = '/login';  };
 

  return (
    <>
      <div id="nav">
        <img src={logo} alt="logo" />
        <input type="search" id="inp" placeholder="Search anything..." />
        <button type="search" id="bt">
          <CiSearch className="srch" />
        </button>{
          localStorage.getItem("login")=="true"? <button  id="logout" onClick={handleLogout}>
          <CiLogout className="srch" />
        </button>:<></>
        }
      
      </div>


    </>
  );
};

export default Header;

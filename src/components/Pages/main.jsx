import React, { useState } from "react";
import { RiFolderAddLine, RiSkipBackLine, RiUploadCloud2Line } from "react-icons/ri";

import Create from "./createFolder";
import { ImDownload } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import Modal from "./Modal";
import {RiFolderFill} from "react-icons/ri";

const Main = () => {
  const [isfolder, setFolders] = useState(true)
  const [isRoot, setRoot] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isDpdnOpen, setIsDpdnOpen] = useState(false);
  // const handleDpdnClick = () => {
  //   setIsDpdnOpen(!isDpdnOpen);
  // };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    
    setIsOpen(true);
    setSelectedOption("file");
  };

  const handleFileButtonClick = () => {
    
  };

  const handleFolderButtonClick = () => {
    setIsOpen(true);
    setSelectedOption("folder");
  };

  
  return (
   <>
    
   <div className="container">
    <div className="top"> 
    <div id='header-name'> 
    {isRoot? <><RiSkipBackLine className="srch"/> / </>:<></> }
    {isfolder?<><a href='/home'>FolderName</a></>:<>Files</> }
    </div>

    <div id = 'button-div'> 
    <button onClick={handleDropdownClick} className="upld">
          create
          <span>
            <RiUploadCloud2Line className="ld" />
          </span>
        </button>
        <button onClick={handleDropdownClick} className="upld">
          Upload
          <span>
            <RiUploadCloud2Line className="ld" />
          </span>
        </button>

        {isDropdownOpen && (
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} type={selectedOption} />
        )}
      </div>
    </div>

  
  <ul className="responsive-table">
    <li className="table-header">
     
      <div className="col col-1">Doc-Name</div>
      <div className="col col-2">Owner Name</div>
      <div className="col col-3">File-Size</div>
      <div className="col col-4">
        Last-Modified
      </div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="File-Name">42235</div>
      <div className="col col-2" data-label="Owner Name">John Doe</div>
      <div className="col col-3" data-label="Size">30kb</div>
      <div className="col col-4" data-label="Date">20,april,2023</div>
      <div className="col col-5" data-label="Date"><ImDownload/></div>
      <div className="col col-6" data-label="Date"><MdDeleteForever/></div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="File-Name">42442</div>
      <div className="col col-2" data-label="Owner Name">Jennifer Smith</div>
      <div className="col col-3" data-label="Size">20kb</div>
      <div className="col col-4" data-label="Date">20,april,2023</div>
      <div className="col col-5" data-label="Date"><ImDownload/></div>
      <div className="col col-6" data-label="Date"><MdDeleteForever/></div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="File-Name">42257</div>
      <div className="col col-2" data-label="Owner Name">John Smith</div>
      <div className="col col-3" data-label="Size">100kb</div>
      <div className="col col-4" data-label="Date">20,april,2023</div>
      <div className="col col-5" data-label="Date"><ImDownload/></div>
      <div className="col col-6" data-label="Date"><MdDeleteForever/></div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="File-Name">42311</div>
      <div className="col col-2" data-label="Owner Name">John Carpenter</div>
      <div className="col col-3" data-label="Size">300kb</div>
      <div className="col col-4" data-label="Date">20,april,2023</div>
      <div className="col col-5" data-label="Date"><ImDownload/></div>
      <div className="col col-6" data-label="Date"><MdDeleteForever/></div>
    </li>
   
  </ul>
  
</div>
   </>
  )
}

export default Main

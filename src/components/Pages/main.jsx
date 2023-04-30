import React, { useEffect, useState } from "react";
import { RiFolderAddLine, RiSkipBackLine, RiUploadCloud2Line,RiSortAsc } from "react-icons/ri";
import { deleteFile, getFile, getFiles } from "../../api/file";
import { useHistory, useParams } from 'react-router-dom';

import Create from "./createFolder";
import { ImDownload } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import Modal from "./Modal";
import {RiFolderFill} from "react-icons/ri";
import { getFolder } from "../../api/folder";
import Files from "./My files";

const Main = () => {
  const history = useHistory();
  const [isfolder, setIsfolder] = useState(false)
  const [isRoot, setRoot] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [folder, setFolder] = useState("");
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const { folderName } = useParams();
  // const [isDpdnOpen, setIsDpdnOpen] = useState(false);
  // const handleDpdnClick = () => {
  //   setIsDpdnOpen(!isDpdnOpen);
  // };

  useEffect( () => {
    if (folderName){
    setFolder(folderName)
    setIsfolder(true)}
  },[])

  useEffect(() => {
    if (isfolder == false){
      async function loadFolderData() {
        const loadedData = await getFolder();
        setFolders(loadedData);
      }
      loadFolderData();
    }
    else {
     async function loadFileData() {
      const loadedData = await getFiles(folder);
      setFiles(loadedData);
    }
    loadFileData();}
  }, [folder]);



  const sortFiles = () =>{
    files.sort((a, b) => {
      let nameA = a.filename.toUpperCase();
      let nameB = b.filename.toUpperCase();
      if (nameA > nameB) {
          return -1;
      }
      if (nameA < nameB) {
          return 1;
      }
      return 0;
  });
  setFiles(files);
  console.log(files)
  console.log("i am sorting")
  }

  const sortDate = (list,type) =>{
    list.sort((a, b) =>  new Date(b.created_at) -  new Date(a.created_at)) ;
    if (type == 'files'){setFiles(list);}
    else {
      setFolders(list)
    }
    
  }

  
  const handleDropdownClick = (type) => {
    setIsOpen(true);
    setSelectedOption(type);
    setIsDropdownOpen(true)
  };
  
  const downloadFile = async (fileId, filename) => {
      const fileUrl = await getFile(fileId)
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

  const handleDelete = async (fileId) => {
    console.log("fileId", fileId)
    const res = await deleteFile(fileId)
    window.location.href = `/home/${folder}`; 
    window.alert(res.message)
}

  const handleFolderClick = (folder) =>{
    setIsfolder(true)
    setFolder(folder)
    window.location.href = `/home/${folder}`; 
  }

  
  return (
   <>
   <div className="container">
    <div className="top"> 
    <div id='header-name'> 
    {(isfolder  )?<a href='/home'><RiSkipBackLine className="srch"/> / </a>:<></> }
    {(folder == "")?<>MY Folders</>:<>{folder}</> }
    </div>
    <div id = 'button-div'> 
    { isfolder?        <button onClick={() =>{handleDropdownClick('file')}} className="upld">
          File
          <span>
            <RiUploadCloud2Line className="ld" />
          </span>
        </button>:    <button onClick={() =>{handleDropdownClick('folder')}} className="upld">
          Folder
          <span>
            <RiUploadCloud2Line className="ld" />
          </span>
        </button>}  
        {isDropdownOpen && (
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} type={selectedOption} />
        )}
      </div>
    </div>  
    {(isfolder == false)?
       <ul className="responsive-table">
       <li className="table-header">
         <div className="col col-1">ID</div>
         <div className="col col-2">Folder Name</div>
         <div className="col col-4"  onClick={()=>{sortDate(folders,"folder")}}>  <RiSortAsc/> CREATED AT</div>
       </li>
       {folders.map((file) => (
         <li className="table-row" key={file.ID} onClick={()=>{handleFolderClick(file.name)}}>
          <div className="col col-2" data-label="Owner Name" >
            {`${file.id} `}
            <button > <RiFolderFill /></button>
            </div>
           <div className="col col-1" data-label="File-Name">{file.name}</div>
           <div className="col col-2" data-label="File-Name">{file.created_at}</div>

         </li>
       ))}
         </ul>:   <ul className="responsive-table">
  <li className="table-header">
    <div className="col col-1" onClick={sortFiles}> <RiSortAsc/> Doc-Name</div>
    <div className="col col-2">Owner Name</div>
    <div className="col col-3">File-Size</div>
    <div className="col col-4"  onClick={()=>{sortDate(files,"files")}}>  <RiSortAsc/> CREATED AT</div>
    <div className="col col-5">Download</div>
    <div className="col col-6">Delete</div>
  </li>
  {files.map((file) => (
    <li className="table-row" key={file.id}>
      <div className="col col-1" data-label="File-Name">{file.filename}</div>
      <div className="col col-2" data-label="Owner Name">{file.name}</div>
      <div className="col col-3" data-label="Size">{`${file.size} KB`}</div>
      <div className="col col-4" data-label="Date">{file.created_at}</div>
      { (localStorage.getItem('level') == 1)?
        <>
             <div className="col col-5" data-label="Download" onClick={()=>{downloadFile(file.id,file.filename)}}><ImDownload /></div>
             <div className="col col-6" data-label="Delete" onClick={() =>{handleDelete(file.id)}}><MdDeleteForever /></div>
       </>:<></>
    } 
 
    </li>
  ))}
    </ul> }

</div>
   </>
  )
}

export default Main

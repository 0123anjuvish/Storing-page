import Files from "./My files";
import Folder from "./Folder";
import React from 'react';
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ isOpen, setIsOpen, type }) => {
  const handleClose = () => {
    setIsOpen(false);
  }

  const renderContent = () => {
    if (type === 'folder') {
      return <Folder />;
    } else if (type === 'file') {
      return <Files />;
    }
  }
  return (
    <>
      {isOpen && <div  onClick={handleClose} />}
      <div className="centered">
        {isOpen && (
          <div className="modal1">
            <div className="modalHeader">
              <div> <h5 className="heading">Upload File</h5></div>
               <div >
            <button  onClick={handleClose} style={{"border":0 , "margin":"10px"}}>
              <RiCloseLine />
            </button>
            </div>
            </div>
            <div className="modalContent">
              {renderContent()}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;

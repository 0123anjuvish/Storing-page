

import React from 'react';
import { RiCloseLine } from "react-icons/ri";

import Folder from "./Folder";
import Files from "./My files";

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
      {isOpen && <div className="darkBG" onClick={handleClose} />}
      <div className="centered">
        {isOpen && (
          <div className="modal1">
            <div className="modalHeader">
              <h5 className="heading">Upload {type === 'folder' ? 'Folder' : 'File'}</h5>
            </div>
            <button className="closeBtn" onClick={handleClose}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className="modalContent">
              {renderContent()}
            </div>
            <div className="modalActions">
              <div className="actionsContainer">
                <button className="deleteBtn" onClick={handleClose}>
                 Clear
                </button>
                {/* <button className="cancelBtn" onClick={handleClose}>
                  Cancel
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;

import React from "react";

import { RiCloseLine } from "react-icons/ri";

const Mode = ({ setIsOpen }) => {
    const handleClose = () => {
        setIsOpen(false);
      }
  return (
    <>
      <div className="darkBG1" onClick={handleClose} />
      <div className="centered1">
        <div className="modal2">
          <div className="modalHeader1">
            <h5 className="heading1">Create Folder</h5>
          </div>
          <button className="closeBtn1" onClick={handleClose}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
         
          {/* <div className="modalActions1">
            <div className="actionsContainer1">
              <button className="deleteBtn" onClick={handleClose}>
                Delete
              </button>
              <button
                className="cancelBtn1"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Mode;






// import React, { useState } from 'react';

import Folder from "./Folder";
import Files from "./My files";
// function ModalBox() {
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Modal Title</h2>
//         <p>Modal content goes here...</p>
//       </div>
//     </div>
//   );
// }

// function Modal() {
//   const [showModal, setShowModal] = useState(false);

//   function handleModalOpen() {
//     setShowModal(true);
//   }

//   function handleModalClose() {
//     setShowModal(false);
//   }

//   return (
//     <div>
//       <button onClick={handleModalOpen}>Open Modal</button>
//       {showModal && (
//         <div className="modal-overlay" onClick={handleModalClose}>
//           <ModalBox />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Modal;

function Modal({ type, name, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* <h2>
          Upload {type === 'folder' ? 'Folder' : 'File'}: {name}
        </h2> */}
        {type === 'folder' && (
          <div>
           <Folder/>
          </div>
        )}
        {type === 'file' && (
          <div>
           <Files/>
          </div>
        )}
        <button onClick={onClose} className="cls">X</button>
      </div>
    </div>
  );
}
export default Modal;
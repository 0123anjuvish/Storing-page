import React, { useState} from 'react';
import Mode from './openmodal';
function Create() {
  const [isOpen, setIsOpen] = useState(false);
  const [folderName, setFolderName] = useState('');

  const handleInputChange = (event) => {
    setFolderName(event.target.value);
  };

  const handleClose = () => {
    setIsOpen(false);
    setFolderName('');
  }

  const handleCreateFolder = () => {
   
    console.log(`Creating folder: ${folderName}`);
    handleClose();
  };

  return (
    <>
    <button className='crt1' onClick={() => setIsOpen(true)}>
Create
</button>

      {isOpen && <Mode setIsOpen={setIsOpen} />}
      {isOpen && (
        <div className="crt-div">
          <div className="crt-cont">
            
            <input type="text" value={folderName} onChange={handleInputChange} />
            <button onClick={handleCreateFolder}>Create</button>
            <button onClick={handleClose}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Create;

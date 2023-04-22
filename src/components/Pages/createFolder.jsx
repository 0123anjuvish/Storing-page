import React, { useState} from 'react';

function Create() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folderName, setFolderName] = useState('');

  const handleInputChange = (event) => {
    setFolderName(event.target.value);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFolderName('');
  };

  const handleCreateFolder = () => {
    // logic to create folder with the given name
    console.log(`Creating folder: ${folderName}`);
    handleModalClose();
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Create Folder</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create Folder</h2>
            <input type="text" value={folderName} onChange={handleInputChange} />
            <button onClick={handleCreateFolder}>Create</button>
            <button onClick={handleModalClose}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Create;

import React, { useState } from "react";

import { uploadFile } from "../../api/file";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Files() {
  const [file, setFile] = useState(null);
  const { folderName } = useParams();
  const [success, setSuccess] = useState(false);


  // const UPLOAD_ENDPOINT =
  // const UPLOAD_ENDPOINT = "http://localhost:3001";



  const upload =  async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("folder", folderName);
    
    const filedata = await uploadFile(formData);
    if (filedata.message == "file uploaded") { 
      console.log(filedata.message)
      setSuccess(true)
      window.location.href = `/home/${folderName}`;
    }
    
  };

  const handleOnChange = event => {
    setFile(event.target.files[0]);
  };

  return (
    <>
    { (success == true ) ? <div>SUCCESSFULLY UPLOADED</div> :
    <form >
      <input type="file"  onChange={handleOnChange} />
      <button type="submit" className="ul" onClick={upload}>Upload</button>
    </form>}
    </>
  );
}

export default Files;

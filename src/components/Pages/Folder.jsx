import React, { useState } from "react";

function Folder() {
  const [folder, setFolder] = useState(null);

  const UPLOAD_ENDPOINT =
  "http://localhost:3001";

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      let res = await uploadFolder(folder);
      console.log(res.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  const uploadFolder = async folder => {
    const formData = new FormData();
    formData.append("avatar", folder);

    return await fetch(UPLOAD_ENDPOINT, {
      method: "POST",
      body: formData,
    });
  };

  const handleOnChange = e => {
    console.log(e.target.folder[0]);
    setFolder(e.target.folder[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
       {/* <div className="h5">Select here</div> */}
      <input type="file" className="choose" onChange={handleOnChange} />
      <button type="submit" className="ul">Upload</button>
    </form>
  );
}

export default Folder;

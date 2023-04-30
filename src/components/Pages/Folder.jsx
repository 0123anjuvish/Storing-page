import React, { useState } from "react";

import { createFolder } from "../../api/folder";

function Folder() {
  const [folder, setFolder] = useState(null);


  const uploadFolder = async () => {
    const res = await createFolder(folder)
  };

  const handleOnChange = e => {
    setFolder(e.target.value);
    console.log(e.target.value,"afanofnaon")
  };

  return (
    <form >
       {/* <div className="h5">Select here</div> */}
      <input type="text" className="choose" placeholder="enter folder name" onChange={handleOnChange} />
      <button type="submit" className="ul" onClick={uploadFolder}>Upload</button>
    </form>
  );
}

export default Folder;

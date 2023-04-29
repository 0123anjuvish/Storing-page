import React, { useState } from "react";

function Files() {
  const [file, setFile] = useState(null);

  // const UPLOAD_ENDPOINT =
  const UPLOAD_ENDPOINT = "http://localhost:3001";

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      let res = await uploadFile(file);
      console.log(res.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  const uploadFile = async file => {
    const formData = new FormData();
    formData.append("avatar", file);

    return await fetch(UPLOAD_ENDPOINT, {
      method: "POST",
      body: formData,
    });
  };

  const handleOnChange = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
    {/* <div className="h5">Select here</div> */}
      <input type="file"  onChange={handleOnChange} />
      <button type="submit" className="ul">Upload</button>
    </form>
  );
}

export default Files;

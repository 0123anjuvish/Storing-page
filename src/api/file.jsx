import {baseUrl, handleApiResponse} from './master';
import axios from 'axios';


async function uploadFile(formData) {
  const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    const response = await axios.post(`${baseUrl}/uploadfile`, formData, config);
    console.log(response, response.status)
    if (response.status == 200) {
      const json =  response.data
      return json;
    } else {
      const errorJson = await response.json(); 
      throw new Error(errorJson.message);
    }

  }

//   var formdata = new FormData();
// formdata.append("file", fileInput.files[0], "centroidseries_merge1.csv");
// formdata.append("folder", "test2");

async function getFiles(foldername) {
    const response = await fetch(`${baseUrl}/getfiles`, {
      method: 'POST',
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        'Content-Type':  'application/json'
      },
      body: JSON.stringify({
        "folder" : foldername
      })
    });
  
    const loginData = await handleApiResponse(response);
    return loginData;
  }

async function getFile(fileid) {
    const response = await fetch(`${baseUrl}/getfile`, {
      method: 'POST',
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        'Content-Type':  'application/json'
      },
      body: JSON.stringify({
        "file_id" : fileid
      })
    });
    const blob = await response.blob();
    const fileUrl = URL.createObjectURL(blob);
    return fileUrl
    ;
  }

  async function deleteFile(fileid) {
    const response = await fetch(`${baseUrl}/deletefile`, {
      method: 'POST',
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        'Content-Type':  'application/json'
      },
      body: JSON.stringify({
        "file_id" : fileid
      })
    });
    const loginData = await handleApiResponse(response);
    return loginData;
    ;
  }

export {uploadFile,getFiles,getFile,deleteFile};

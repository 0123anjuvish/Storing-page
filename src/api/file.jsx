import {baseUrl, handleApiResponse} from './master';

async function uploadFile(filedata) {
    const response = await fetch(`${baseUrl}/uploadfile`, {
      method: 'POST',
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': "multipart/form-data; boundary=<calculated when request is sent>"
      },
      body: filedata
    });
  
    const fildata = await handleApiResponse(response);
    return fildata;
  }

//   var formdata = new FormData();
// formdata.append("file", fileInput.files[0], "centroidseries_merge1.csv");
// formdata.append("folder", "test2");

async function getFiles(foldername) {
    const response = await fetch(`${baseUrl}/getfolder`, {
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
    const response = await fetch(`${baseUrl}/getfolder`, {
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
  }

export {uploadFile,getFiles,getFile};

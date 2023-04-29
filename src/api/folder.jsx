import {baseUrl, handleApiResponse} from './master';

async function createFolder(foldername) {
    const response = await fetch(`${baseUrl}/createfolder`, {
      method: 'POST',
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': foldername,
      })
    });
  
    const loginData = await handleApiResponse(response);
    return loginData;
  }

async function getFolder() {
    const response = await fetch(`${baseUrl}/getfolder`, {
      method: 'GET',
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`,
      },
    });
  
    const loginData = await handleApiResponse(response);
    return loginData;
  }

export {createFolder,getFolder};

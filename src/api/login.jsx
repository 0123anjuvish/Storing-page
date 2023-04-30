import {baseUrl, handleApiResponse} from './master';

async function login(email, password) {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
  
    const loginData = await handleApiResponse(response);
    return loginData;
  }


export {login};
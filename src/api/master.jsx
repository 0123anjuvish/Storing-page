const baseUrl = 'http://127.0.0.1:5000'
async function handleApiResponse(response) {
  console.log("this is the response" , response.status, response)
    if ([401,403,498].includes(response.status)){
      window.location.href = '/login';  
    }
    if (response.ok) {
      const json = await response.json();
      console.log(json)
      return json;
    } else {
      const errorJson = await response.json();
      // window.location.href = '/login';  
      throw new Error(errorJson.message);
    }
  }

export {baseUrl, handleApiResponse} 
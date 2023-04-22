const baseUrl = 'http://127.0.0.1:5000/'
async function handleApiResponse(response) {
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      const errorJson = await response.json();
      throw new Error(errorJson.message);
    }
  }

export {baseUrl, handleApiResponse} 
export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching ideas');
      }
      return response.json();
    });
}

export const addUrl = async (newUrl) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newUrl),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/urls', options)
    .then(response => {
      if (!response.ok) {
        throw Error('Error adding url');
      }
      const url = response.json();
      return url;
    });
}

export const deleteURL = async (urlID) => {
    const options = {
      method: 'DELETE',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`http://localhost:3001/api/v1/urls/${urlID}`, options)
    .then(response => {
      if (!response.ok) {
        throw Error('Error deleting url');
      }
      const url = response.json();
      return url;
    });
}

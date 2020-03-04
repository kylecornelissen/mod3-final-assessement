export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching ideas');
      }
      return response.json();
    });
}

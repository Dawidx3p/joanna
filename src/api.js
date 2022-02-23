const createArticle = async (article) => fetch('/.netlify/functions/createArticle', {
    body: JSON.stringify(article),
    method: 'POST'
  })
.then(response => response.json());

export {createArticle}
const createArticle = async (article) => fetch('/.netlify/functions/createArticle', {
    body: JSON.stringify(article),
    method: 'POST'
  })
.then(response => response.json());

const deleteArticle = async (id) => fetch(`/.netlify/functions/deleteArticle/${id}`)
.then(response => response.json());

const updateArticle = async (id, article) => fetch(`/.netlify/functions/updateArticle/${id}`, {
    body: JSON.stringify(article),
    method: 'POST'
  })
.then(response => response.json());

const getAllArticles = async () => fetch(`/.netlify/functions/getAllArticles`)
.then(response => response.json());

export { createArticle, deleteArticle, updateArticle, getAllArticles }
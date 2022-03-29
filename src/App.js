import {useEffect, useState} from 'react';
import { getAllArticles } from './api';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NewArticle from './components/NewArticle';
import Articles from './components/Articles';
import EditArticle from './components/EditArticle';

import './MyTemplate.scss';
import './App.scss';

import Auth from './components/Auth';

function App() {
  const [articles, setArticles] = useState([]);
  const [isAuthenticated, setAuth] = useState(false);

  const addArticle = (article) => setArticles(prev => [...prev, article])

  const updateArticles = ( article, id ) => setArticles(prev => prev.map(prevArticle => {
    if(prevArticle.ref['@ref'].id===id){
      return article
    }else{
      return prevArticle
    }
    
  }))

  const deleteArticle = (id) => setArticles(prev => {
    return prev.filter(article => article.ref['@ref'].id!==id)
  })

  useEffect(() => {
    getAllArticles()
    .then(response => setArticles([...response].reverse()))
  },[])

  return (
    <>
      {isAuthenticated ? <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Articles articles={articles}/>}/>
            <Route path='/add_article' element={<NewArticle addArticle={addArticle}/>}/>
            <Route path='/article/:id' element={<EditArticle updateArticles={updateArticles} deleteArticleR={deleteArticle} articles={articles}/>}/>
          </Routes>
        </BrowserRouter></div> : <Auth setAuth={(bool) => setAuth(bool)}/>}
    </>
  );
}

export default App;


/*
        <button onClick={async () => {
          const response = await createArticle({testing: 123, isAmazing: true})
    
          setFetch(JSON.stringify(response));
        }}>Create</button>
        <button onClick={async () => {
          const response = await getAllArticles()
    
          setFetch(JSON.stringify(response));
        }}>getAll</button>
        <button onClick={async () => {
          const response = await updateArticle('324419323509604944', {updated: true})
    
          setFetch(JSON.stringify(response));
        }}>update first</button>
        <button onClick={async () => {
          const response = await deleteArticle('324419323509604944')
    
          setFetch(JSON.stringify(response));
        }}>delete first</button>
        */
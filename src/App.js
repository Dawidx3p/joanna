import {useEffect, useState} from 'react';
import { getAllArticles } from './api';
import { moveUp, moveDown } from './utils';
import './App.css';

import Article from './Article';
import NewArticle from './components/NewArticle';

function App() {
  console.log('up',moveUp([1,2,3,4,5], 0))
  console.log('down',moveDown([1,2,3,4,5], 0))
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getAllArticles()
    .then(response => setArticles(response))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        {articles.map((article, key) => <Article key={key} article={article} />)}
        <NewArticle />
      </header>
    </div>
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
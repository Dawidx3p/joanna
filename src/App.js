import logo from './logo.svg';
import {useState} from 'react';
import { createArticle } from './api';
import './App.css';
function App() {
  const [fetched, setFetch] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={async () => {
          const response = await createArticle({testing: 123, isAmazing: true})
    
          setFetch(JSON.stringify(response));
        }}>Create</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{fetched}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

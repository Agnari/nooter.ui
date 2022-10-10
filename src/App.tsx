import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './MUI_demo';

function App() {
  return (
    <div className="App">
      <Demo />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Lukas has edited this</p>
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

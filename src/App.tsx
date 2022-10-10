import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './MuiDemo';
import { // React route komponentai deklaruoti, bet kol kas niekur nenaudojami
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Lukas has edited this</p>
        <Demo />
        <p>Routing is added(only components declared)</p>
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

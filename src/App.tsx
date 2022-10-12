import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './MuiDemo';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignIn } from './pages/SignIn';
import { PasswordReset } from './pages/PasswordReset';
import { Help } from './pages/Help';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Nooter project
        </p>
        <p>Upgrades are coming</p>
        <Demo />
        <p>Routing was added(see below)</p> 

        <>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signin">Sign in</Link></li>
            <li><Link to="/passwordreset">Password reset</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        </>

      </header>
    </div>

  );
}
export default App;

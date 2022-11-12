import './App.css';
import './animations.css';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PasswordReset } from './pages/PasswordReset';
import { NewPost } from './pages/NewPost';
import { EditPost } from './pages/EditPost';
import { YourPosts } from './pages/YourPosts';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import React from 'react';
import { url } from 'inspector';

function App() {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `10px solid ${theme.palette.divider}`, backgroundImage:"linear-gradient(to bottom, #ffb02e, #ce5704)", borderColor: "#ce5704", borderRadius: 20, borderBottomStyle: "groove", filter: "drop-shadow(0px 15px 20px red)"}}
    
      >

        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Link variant="h6" color="inherit" href="/" underline="none" noWrap sx={{ flexGrow: 1, fontFamily: "Cabin Sketch", fontWeight: "bold", color: "white", fontSize: 27, filter: "drop-shadow(2px 2px 2px #A4BBFF)" }}>
            NOOTER
          </Link>

          <Button href="/newpost" variant="outlined" sx={{ my: 1, mx: 1.5, borderColor: "white", color: "white", borderRadius: 20, left: 30, fontFamily: "Cabin Sketch", filter: "drop-shadow(1px 1px 1px black)" }}>  New Post
          </Button>
          <Button href="/yourposts" variant="outlined" sx={{ my: 1, mx: 1.5, color: "white", borderColor: "white", borderRadius: 20, left: 30, fontFamily: "Cabin Sketch", filter: "drop-shadow(1px 1px 1px black)" }}> 
          Your Posts
          </Button>
          <Button href="/login" variant="contained" sx={{ my: 1, mx: 1.5, backgroundColor: "#A97637", color: "white", borderRadius: 3, fontFamily: "Cabin Sketch", left: 20, filter: "drop-shadow(2px 2px 2px black)" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/editpost" element={<EditPost />} />
        <Route path="/yourposts" element={<YourPosts />} />
      </Routes>
    </>

  );
  
}
export default App;
import './App.css';
import './styles.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NewPost } from './pages/NewPost';
import { EditPost } from './pages/EditPost';
import { YourPosts } from './pages/YourPosts';
import { ReadPage } from './pages/ReadPage';
import { LogOut } from './pages/LogOut';
import { Greeting } from './pages/Greeting';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';


function App() {
  const userStr = localStorage.getItem("USER");
  const [user, setUser] = useState(userStr ? JSON.parse(userStr) : null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("USER");
    setUser(null);
    navigate("/logout");

  }
  //checks if the token is expired
  window.onload = () => {
    if (user) {
      let timeLeft = Date.parse(user.expiration) - Date.now();
      if (timeLeft > 0) setTimeout(handleLogout, timeLeft);
      else handleLogout();
    }
  }

  //logs people in/out across multiple tabs
  window.addEventListener("storage", (token) => {
    if (token.oldValue === null) setUser(token.newValue ? JSON.parse(token.newValue) : null);
    else setUser(null);
  });

  console.log(user);
  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{ height: "62px", background: "#242323" }}
      >

        <Toolbar sx={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', transform: "translate(0vh, -1vh)", borderBottomColor: "#f7b500", borderBottomStyle: "dashed" }}>

          <Link variant="h6" color="inherit" component={RouterLink} to="/home" underline="none" noWrap sx={{ flexGrow: 1, fontFamily: "Cabin Sketch", color: "white", fontSize: 27, transform: "translate(1vw, -1vh)", filter: "drop-shadow(3px 3px 3px #3d3d3d)" }}>
            <img className="stickerM" src={require('./stickers/nootnoot.png')} alt="oops" />NOOTER
          </Link>

          {
            user && <Link className='taskhover' component={RouterLink} to="/newpost" underline="none" sx={{ fontFamily: "Cabin Sketch", color: "white", fontSize: "24px", transform: "translate(-40vw, 1.3vh)" }}>
              <PostAddIcon sx={{ color: "white" }} />
              Noot
            </Link>
          }
          {
            user && <Link className='taskhover' component={RouterLink} to={`/yourposts/user?id=${user.userId}`} underline="none" sx={{ fontFamily: "Cabin Sketch", color: "white", fontSize: "24px", transform: "translate(-25vw, 1.3vh)" }}>
              <DynamicFeedIcon sx={{ color: "white" }} />
              Your Stuff
            </Link>
          }
          {window.location.pathname !== "/" &&
            !user && <Button component={RouterLink} to="/login" variant="contained" sx={{ maxWidth: '9vw', maxHeight: '5.9vh', minWidth: '7vw', minHeight: '5.9vh', my: 1, mx: 1.5, backgroundColor: "#A97637", color: "white", borderRadius: 3, fontFamily: "Righteous", left: 20, filter: "drop-shadow(0px 1.5px 1.5px #404040)", transform: "translate(0vw, 0.4vh)" }}>
              Login
            </Button>
          }
          {
            user && <Button onClick={handleLogout} variant="contained" sx={{ maxWidth: '9vw', maxHeight: '5.9vh', minWidth: '7vw', minHeight: '5.9vh', my: 1, mx: 1.5, backgroundColor: "darkred", color: "white", borderRadius: 3, fontFamily: "Righteous", left: 20, filter: "drop-shadow(0px 1.5px 1.5px #404040)", transform: "translate(0vw, 0.4vh)" }}>
              Logout
            </Button>
          }
          <img className="hewalkin" src={require("./stickers/goose-running-goose.gif")} />



        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/editpost/:article" element={<EditPost />} />
        <Route path="/yourposts/:user" element={<YourPosts />} />
        <Route path="/read/:id" element={<ReadPage />} />
      </Routes>
    </>

  );
}
export default App;
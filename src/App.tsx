import './App.css';
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


function App() {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `10px solid ${theme.palette.divider}`, backgroundImage: "url(https://www.toptal.com/designers/subtlepatterns/uploads/5-dots.png)", borderColor: "#ce5704", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderBottomStyle: "groove" }}
      >

        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Link variant="h6" color="inherit" href="/" underline="none" noWrap sx={{ flexGrow: 1, fontFamily: "Cabin Sketch", fontWeight: "bold", color: "white", fontSize: 27, filter: "drop-shadow(2px 2px 2px #A4BBFF)" }}>
            NOOTER
          </Link>

          <Button href="/newpost" variant="outlined" sx={{ my: 1, mx: 1.5, borderColor: "#A97637", color: "#A97637", borderRadius: 20, left: 30 }}>  New Post
          </Button>
          <Button href="/yourposts" variant="outlined" sx={{ my: 1, mx: 1.5, color: "#A97637", borderColor: "#A97637", borderRadius: 20, left: 30 }}> 
          Your Posts
          </Button>
          <Button href="/login" variant="contained" sx={{ my: 1, mx: 1.5, backgroundColor: "#A97637", color: "white", borderRadius: 3, fontFamily: "Righteous", left: 20 }}>
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

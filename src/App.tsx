import './App.css';
import './animation.css';
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

function App() {
  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{height: "62px", background: "#242323"}}
      >

        <Toolbar sx={{ flexWrap: 'wrap', transform: "translate(0px, -10px)" }}>
          <Link variant="h6" color="inherit" href="/" underline="none" noWrap sx={{ flexGrow: 1, fontFamily: "Cabin Sketch", color: "white", fontSize: 27, transform: "translate(70px, -9px)", filter: "drop-shadow(3px 3px 3px #3d3d3d)" }}> 
          <img src={require('./nootnoot.png')} alt="oops" style={{transform:"translate(0px, 15px) rotate(20deg)", height: '50px', width: '50px' }}/>NOOTER 
          </Link>

          <Link className="animationshut" href="/newpost" underline="none" sx={{fontFamily: "Cabin Sketch", color: "white", fontSize: "24px", transform: "translate(-500px, 10px)"}}>  Post
          </Link>
          <Link className="animationshut" href="/yourposts" underline="none" sx={{fontFamily: "Cabin Sketch", color: "white", fontSize: "24px", transform: "translate(-400px, 10px)"}}> 
          Edit
          </Link>
          <Button href="/login" variant="contained" sx={{ my: 1, mx: 1.5, backgroundColor: "#A97637", color: "white", borderRadius: 3, fontFamily: "Righteous", left: 20, filter: "drop-shadow(0px 1.5px 1.5px #404040)" }}>
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

import './App.css';
import './styles.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PasswordReset } from './pages/PasswordReset';
import { NewPost } from './pages/NewPost';
import { EditPost } from './pages/EditPost';
import { YourPosts } from './pages/YourPosts';
import { ReadPage } from './pages/ReadPage';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';




function App() {
  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{ height: "62px", background: "#242323" }}
      >

        <Toolbar sx={{ flexWrap: 'wrap', transform: "translate(0vh, -1vh)", borderBottomColor: "#f7b500", borderBottomStyle: "dashed" }}>

          <Link variant="h6" color="inherit" href="/" underline="none" noWrap sx={{ flexGrow: 1, fontFamily: "Cabin Sketch", color: "white", fontSize: 27, transform: "translate(1vw, -2vh)", filter: "drop-shadow(3px 3px 3px #3d3d3d)" }}>
            <img className="stickerM" src={require('./stickers/nootnoot.png')} alt="oops" />NOOTER
          </Link>

          <PostAddIcon sx={{ color: "white", transform: "translate(-33vw, -0.5vh)" }} />
          <DynamicFeedIcon sx={{ color: "white", transform: "translate(-18vw, -0.1vh)" }} />
          <Link className="animationshut" href="/newpost" underline="none" sx={{ fontFamily: "Cabin Sketch", color: "white", fontSize: "24px", transform: "translate(-35.7vw, 1.4vh)" }}> Noot
          </Link>
          <Link className="animationshut" href="/yourposts" underline="none" sx={{ fontFamily: "Cabin Sketch", color: "white", fontSize: "24px", transform: "translate(-25.1vw, 1.5vh)" }}>
            Stuff
          </Link>
          <Button href="/login" variant="contained" sx={{maxWidth: '9vw', maxHeight: '5.9vh', minWidth: '7vw', minHeight: '5.9vh', my: 1, mx: 1.5, backgroundColor: "#A97637", color: "white", borderRadius: 3, fontFamily: "Righteous", left: 20, filter: "drop-shadow(0px 1.5px 1.5px #404040)", transform:"translate(0vw, -0.5vh)"}}>
            Login
          </Button>
          <img className="hewalkin" src={require("./stickers/goose-running-goose.gif")} />



        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/editpost/:id" element={<EditPost />} />
        <Route path="/yourposts" element={<YourPosts />} />
        <Route path="/read/:id" element={<ReadPage />} />
      </Routes>
    </>

  );
}
export default App;

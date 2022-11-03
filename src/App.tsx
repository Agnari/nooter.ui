import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PasswordReset } from './pages/PasswordReset';
import { NewPost } from './pages/NewPost';
import { EditPost } from './pages/EditPost';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { url } from 'inspector';

function App() {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `10px solid ${theme.palette.divider}`, backgroundColor: "#242323", borderColor: "#878787", borderRadius: 10 }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Link variant="h6" color="inherit" href="/" underline="hover" noWrap sx={{ flexGrow: 1, fontFamily: "Righteous", color: "white" }}>
            NOOTER
          </Link>
          <Button href="/newpost" variant="outlined" sx={{ my: 1, mx: 1.5, borderColor: "white", color: "white" }}> //for testing
            New Post
          </Button>
          <Button href="/editpost" variant="outlined" sx={{ my: 1, mx: 1.5, borderColor: "white", color: "white" }}> //Edit Post test
          </Button>
          <Button href="/login" variant="contained" sx={{ my: 1, mx: 1.5, backgroundColor: "#A97637", color: "white", borderRadius: 3, fontFamily: "Righteous" }}>
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
      </Routes>
    </>

  );
}
export default App;

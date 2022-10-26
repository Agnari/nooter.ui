import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PasswordReset } from './pages/PasswordReset';
import { Help } from './pages/Help';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

function App() {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Link variant="h6" color="inherit" href="/" noWrap sx={{ flexGrow: 1 }}>
            NOOTER
          </Link>
          <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>

  );
}
export default App;

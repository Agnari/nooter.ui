import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

export function Register() {
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
        });

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: data.get('username'),
                email: data.get('email'),
                password: data.get('password'),
            })
        };
        fetch('https://localhost:7018/api/users', requestOptions)
            .then(response => response.json())
            .then(() => navigate('/login'))
    }

    return (
        <Container style={{background: "url(https://img.freepik.com/free-photo/vintage-crumpled-paper-textured_53876-96063.jpg?t=st=1668288152~exp=1668288752~hmac=4b7bab87ab2d6a0477777fd2584b043def4808c24a8e1eb81573ca3b5b83b122)"}} sx={{width:"60%", transform:"translate(0px, 100px)", border: 7, borderColor: "#2e2d2d", borderStyle:"dashed", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", filter:"drop-shadow(6px 6px 6px black)"}}>
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        inputProps={{style:{fontFamily: "Righteous"}}}
                        InputLabelProps={{style:{fontFamily: "Righteous"}}}
                        
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        inputProps={{style:{fontFamily: "Righteous"}}}
                        InputLabelProps={{style:{fontFamily: "Cabin Sketch"}}}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        inputProps={{style:{fontFamily: "Righteous"}}}
                        InputLabelProps={{style:{fontFamily: "Cabin Sketch"}}}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"

                        sx={{ mt: 3, mb: 2, backgroundColor: "#59260B", border: 2, borderStyle:'groove', borderColor:'#2b1204', fontFamily: "Cabin Sketch", color: "white", fontSize: 20 }}
                     
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item style={{paddingBottom: 20}}>
                            <Link href="/login" variant="body2" underline="always" style={{fontFamily: "Righteous", color: "darkred"}}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </Container>
    );
}
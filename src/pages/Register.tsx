import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

export function Register() {

    const Swal = require('sweetalert2');
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
            .then(response=>{
                console.log(response)
                if(response.ok){
                        Swal.fire({
                            title: 'Good job!',
                            text: 'Account was created!',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                        return response.json()
                        .then(() => navigate('/'))
                    }
                else{
                        console.log(response)
                        Swal.fire({
                            title: 'Error!',
                            text: 'Something was wrong',
                            icon: 'error',
                            confirmButtonText: 'OK'
                          });
                    }
            })
    }
    
    return (
        <Container style={{background: "url(https://img.freepik.com/free-photo/vintage-crumpled-paper-textured_53876-96063.jpg?t=st=1668288152~exp=1668288752~hmac=4b7bab87ab2d6a0477777fd2584b043def4808c24a8e1eb81573ca3b5b83b122)", backgroundSize:"cover"}} sx={{width:"100vh", transform:"translate(0vw, 14.727540500736376vh) rotate(-2deg)", border: 7, borderColor: "#2e2d2d", borderStyle:"dashed", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", filter:"drop-shadow(6px 6px 6px black)"}}>
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width:"80vh" }}>
                    <TextField 
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Give yourself a nickname :)"
                        name="username"
                        autoComplete="username"
                        inputProps={{style:{fontFamily: "Righteous"}}}
                        InputLabelProps={{style:{fontFamily: "Cabin Sketch"}}}
                        
                    />
                    <TextField 
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Your mail adress...?"
                        name="email"
                        autoComplete="email"
                        inputProps={{style:{fontFamily: "Righteous"}}}
                        InputLabelProps={{style:{fontFamily: "Cabin Sketch"}}}
                    />
                    <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Passcode"
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
                        <img className="redpin" src={require("../stickers/pin.png")} style={{transform: "translate(28.571428571428573vw, -58.910162002945505vh) rotate(20deg)"}} alt="pin" />
                        <img className="redpin" src={require("../stickers/pin.png")} style={{transform: "translate(-23.015873015873016vw, -58.910162002945505vh)"}} alt="pin" />
                        <Grid item style={{paddingBottom: 20}}>
                            <Link href="/login" variant="body2" underline="always" style={{fontFamily:"Righteous", color:"darkred", filter:"drop-shadow(1px 1px 1px black)"}}>
                                Already have an account? Sign in!
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </Container>
    );
}
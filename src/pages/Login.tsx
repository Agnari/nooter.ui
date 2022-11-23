import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../styles.css';
import { createRef, useRef } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const Swal = require('sweetalert2');
    const navigate = useNavigate();
    const emailRef = createRef<any>();
    const passwordRef = createRef<any>();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("emailRef", emailRef.current.value, "passwordRef", passwordRef.current.value);
        //fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
        };
        fetch('https://localhost:7018/api/account/login', requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json()
                        .then((result) => {
                            localStorage.setItem("USER", JSON.stringify(result));
                        })
                        .then(() => window.location.href = "/")
                }
                else {
                    console.log(response)
                    Swal.fire({
                        title: 'Error!',
                        color: 'Red',
                        text: 'Something was wrong',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
    };

    return (

        <Container sx={{ transform: "translate(0vw, 14.727540500736376vh)" }}>
            <Container style={{ background: "url(https://img.freepik.com/free-photo/vintage-crumpled-paper-textured_53876-96063.jpg?t=st=1668288152~exp=1668288752~hmac=4b7bab87ab2d6a0477777fd2584b043def4808c24a8e1eb81573ca3b5b83b122)", backgroundSize: "cover" }} sx={{ transform: "rotate(3deg)", width: '100vh', height: "60vh", border: 7, borderColor: "#2e2d2d", borderStyle: "dashed", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", filter: "drop-shadow(6px 6px 6px black)" }}>

                <Container maxWidth="xs">
                    <Box sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '45vw' }}>
                            <TextField sx={{ width: "40vw" }}
                                inputRef={emailRef}
                                variant="standard"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Your mail adress...?"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                inputProps={{ style: { fontFamily: "Righteous" } }}
                                InputLabelProps={{ style: { fontFamily: "Cabin Sketch", color: "black" } }} />

                            <TextField sx={{ width: "45vw" }}
                                inputRef={passwordRef}
                                variant="standard"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Passcode"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                inputProps={{ style: { fontFamily: "Righteous" } }}
                                InputLabelProps={{ style: { fontFamily: "Cabin Sketch", color: "black" } }} />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, width: "20vw", height: "5vw", transform: "translate(0vh, 5vh)", backgroundColor: "#59260B", border: 2, borderStyle: 'groove', borderColor: '#2b1204', fontFamily: "Cabin Sketch", color: "white", fontSize: 20 }} >
                                Sign In
                            </Button>

                            <Grid container>
                                <Grid item xs></Grid>
                                <Grid item style={{ paddingBottom: 20, transform: "translate(0vh, -5vh)" }}>
                                    <Link className="doit" href="/register" variant="body2" underline="always" style={{ color: "darkred", fontFamily: "Righteous", filter: "drop-shadow(1px 1px 1px black)" }}>
                                        <img className="ducktrigger" src={require("../stickers/uralreadydead.png")} alt="register... or die." />
                                    </Link>

                                </Grid>
                            </Grid>
                            <img className="redpin" src={require("../stickers/pin.png")} style={{ transform: "translate(-5.555555555555555vw, -61.855670103092784vh) rotate(180deg)" }} alt="pin" />
                            <img className="bluepin" src={require("../stickers/bpin.png")} style={{ transform: "translate(38vw, -63vh) rotate(20deg)" }} alt="pin" />

                        </Box>
                    </Box>
                </Container>
            </Container>
            <img className="kill" src={require("../stickers/die.png")} alt="die" />
            <img className="stamp" src={require("../stickers/stamp.png")} alt="stamp" />
        </Container>
    );
}
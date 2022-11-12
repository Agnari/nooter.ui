import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export function Login() {
    return (
    <Container sx={{transform:"translate(0px, 100px)"}}>
    <Container style={{background: "url(https://img.freepik.com/free-photo/vintage-crumpled-paper-textured_53876-96063.jpg?t=st=1668288152~exp=1668288752~hmac=4b7bab87ab2d6a0477777fd2584b043def4808c24a8e1eb81573ca3b5b83b122)"}} sx={{width:'60%', border: 7, borderColor: "#2e2d2d", borderStyle:"dashed", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", filter:"drop-shadow(6px 6px 6px black)"}}>
       
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" noValidate sx={{ mt: 1, width: '150%' }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        inputProps={{style:{fontFamily: "Righteous"}}}
                        InputLabelProps={{style:{fontFamily: "Cabin Sketch", color: "black"}}}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        inputProps={{style:{fontFamily: "Righteous"}}}
                        InputLabelProps={{style:{fontFamily: "Cabin Sketch", color: "black"}}}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: "#59260B", border: 2, borderStyle:'groove', borderColor:'#2b1204', fontFamily: "Cabin Sketch", color: "white", fontSize: 20 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs></Grid>
                        <Grid item style={{paddingBottom: 20}}>
                            <Link href="/register" variant="body2" underline="always" style={{color: "darkred", fontFamily: "Righteous", filter:"drop-shadow(1px 1px 1px black)"}}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </Container>
        </Container>
    );
}
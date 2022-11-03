import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export function Login() {
    return (
        <Container style={{background: "linear-gradient(to left, #A97637, #545454 )", borderRadius: 40}} sx={{width:'40%'}}>
        <Container style={{background: "linear-gradient(45deg, white, #a8a7a7", borderRadius: 20}} >
       
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" noValidate sx={{ mt: 1 }}>
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
                        InputLabelProps={{style:{fontFamily: "Righteous"}}}
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
                        InputLabelProps={{style:{fontFamily: "Righteous"}}}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: "#A97637", borderRadius: 10, fontFamily: "Righteous" }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs></Grid>
                        <Grid item style={{paddingBottom: 20}}>
                            <Link href="/register" variant="body2" style={{color: "black", fontFamily: "Righteous" }}>
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
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

export function NewPost() {
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            title: data.get('title'),
            body: data.get('body'),
        });

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: data.get('title'),
                body: data.get('body'),
            })
        };
        fetch('https://localhost:7018/api/articles', requestOptions)
            .then(response => response.json())
            .then(() => navigate('/'))
    }
    return (
        <Container style={{background: "linear-gradient(to left, #A97637, #545454)", borderRadius: 40}} sx={{width: '83%'}}>
        <Container style={{background: "linear-gradient(45deg, white, #a8a7a7", borderRadius: 20}}>
        
        <Container maxWidth="md">

            <h2 style={{fontFamily: "Righteous", paddingTop: 20, fontSize: 30 }}>Add post</h2>
            <CssBaseline />
            <Box     >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                variant="standard"
                required
                fullWidth
                id="title"
                placeholder="Post Title"
                inputProps={{style:{fontFamily: "Righteous"}}}
                InputLabelProps={{style:{fontFamily: "Righteous"}}}

            />
            <TextField
                placeholder="Your text"
                id="body"
                multiline
                fullWidth
                rows={12}
                inputProps={{style:{fontFamily: "Righteous"}}}
                InputLabelProps={{style:{fontFamily: "Righteous"}}}
            />
            <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, fontFamily: "Righteous", backgroundColor: "#A97637", borderRadius: 3 }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
            </Box>
            </Box>
        </Container>
        </Container>
        </Container>
    )
}
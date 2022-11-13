import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Swal from 'sweetalert2'


export function NewPost() {

    const Swal = require('sweetalert2');

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            title: data.get('title'),
            body: data.get('body'),
        });

        if (data.get('title') === ''){
            Swal.fire({
                title: 'Error!',
                text: 'Title is missing',
                icon: 'error',
                confirmButtonText: 'OK'
              });
        }

        else if (data.get('body') === ''){
            Swal.fire({
                title: 'Error!',
                text: 'Text is missing',
                icon: 'error',
                confirmButtonText: 'OK'
              });
        }

        else{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: data.get('title'),
                body: data.get('body'),
            })
        };
    

        fetch('https://localhost:7018/api/articles', requestOptions)
        .then(() => navigate('/'))

        Swal.fire({
            title: 'Good job!',
            text: 'Article was added!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }

}

    return (
        <Container style={{background: "linear-gradient(to left, #A97637, #545454)", borderRadius: 40}} sx={{width: '83%'}}>
        <Container style={{background: "linear-gradient(45deg, white, #a8a7a7", borderRadius: 20}}>
        
        <Container maxWidth="md">

            <h2 style={{fontFamily: "Righteous", paddingTop: 20, fontSize: 30 }}>Add post</h2>
            <CssBaseline />
            <Box     >
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
                variant="standard"
                required
                fullWidth
                id="title"
                placeholder="Post Title"
                name = 'title'
                inputProps={{style:{fontFamily: "Righteous"}}}
                InputLabelProps={{style:{fontFamily: "Righteous"}}}

            />
            <TextField
                placeholder="Your text"
                id="body"
                name = 'body'
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
            </Box>
        </Container>
        </Container>
        </Container>
    )
            }
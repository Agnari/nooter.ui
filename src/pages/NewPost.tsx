import Box from "@mui/material/Box";
import '../animation.css';
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
        <Container style={{background: "url(https://www.tilingtextures.com/wp-content/uploads/2018/11/0068-1-512x512.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} sx={{width:"87%", border:5, transform:"translate(0px, 90px)", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", borderStyle: "double", filter:"drop-shadow(5px 5px 5px black)", height:"81vh"}}>

        <img src={require("../fuqno.png")} style={{height:'100px', width:'100px', filter:"drop-shadow(3px 3px 3px black)", transform:"translate(-60px, -35px) rotate(45deg)"}}/> <img src={require("../anber.png")} style={{height:100, width:100, filter:"drop-shadow(-3px 3px -3px black)", transform:"translate(900px, -45px) rotate(-10deg)"}}/> 
        <Container maxWidth="md" sx={{ transform:"translate(0px, -100px)"}}>

        <h2 style={{fontFamily: "Calligraffitti, cursive", fontSize: 30 }}> Add post </h2>
    
            <Box>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transform:"translate(0px, -80px)"
                }}
            >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
       
            <TextField sx={{background:"url(https://img.freepik.com/free-photo/white-crumpled-paper-texture-background-design-space-white-tone_1258-78696.jpg?w=1800&t=st=1668364849~exp=1668365449~hmac=4f3352146117b55bd624ed922e88d5913590fe62d3eeaa38fbae504457d6644b)", transform:"rotate(-0.4deg)", filter:"drop-shadow(-1px 1px 1px black)"}}
                margin="normal"
                variant="standard"
                required
                fullWidth
                id="title"
                placeholder="Post Title"
                name = 'title'
                inputProps={{style:{fontFamily: "Righteous", textAlign:"center"}}}

            />
            <TextField sx={{background:"url(https://img.freepik.com/free-photo/white-crumpled-paper-texture-background-design-space-white-tone_1258-78696.jpg?w=1800&t=st=1668364849~exp=1668365449~hmac=4f3352146117b55bd624ed922e88d5913590fe62d3eeaa38fbae504457d6644b)", transform:"rotate(-1deg)", filter:"drop-shadow(-1px 1px 1px black)"}}
                placeholder="Write something!"
                id="body"
                name = 'body'
                multiline
                fullWidth
                rows={12}
                inputProps={{style:{fontFamily: "Righteous", padding:100, width: 700, height:100, textAlign:"center"}}}
            />
            <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, fontFamily: "Calligraffitti", backgroundColor: "#59260B", borderRadius: "50%", border:2, borderColor:"white", borderStyle:"double", transform:"rotate(1deg)", bottom: 20}}
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
        
    )
            }
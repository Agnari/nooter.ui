import Box from "@mui/material/Box";
import '../styles.css';
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Swal from 'sweetalert2'
import { rootCertificates } from "tls";
import { useEffect, useState } from "react";

export function NewPost() {
    const userStr = localStorage.getItem("USER");
    const [user, setUser] = useState(userStr ? JSON.parse(userStr) : null);

    const Swal = require('sweetalert2');

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            title: data.get('title'),
            body: data.get('body'),
            authorId: user.userId,
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
                authorId: user.userId,
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
        <Container style={{background: "url(https://www.tilingtextures.com/wp-content/uploads/2018/11/0068-1-512x512.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} sx={{width:"87vw", border:5, transform:"translate(0vw, 7vh)", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", borderStyle: "double", filter:"drop-shadow(5px 5px 5px black)", height:"81vh"}}>

        <img src={require("../stickers/fuqno.png")} style={{height:'7.936507936507937vw', width:'7.936507936507937vw', filter:"drop-shadow(3px 3px 3px black)", transform:"translate(-4.761904761904762vw, -5.154639175257732vh) rotate(45deg)"}}/> 
        <img src={require("../stickers/anber.png")} style={{height:'7.936507936507937vw', width:'7.936507936507937vw', filter:"drop-shadow(-3px 3px -3px black)", transform:"translate(70vw, -5vh) rotate(-45deg)", }}/> 
        <Container maxWidth="md" sx={{ transform:"translate(0vw, -14.727540500736376vh)" }}>

        <h2 style={{fontFamily: "Calligraffitti, cursive", fontSize: 30 }}> Add post </h2>
    
            <Box>
            <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transform:"translate(0px, -11.782032400589102vh)"
                }}
            >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width:"70vw", paddingTop:'5vh' }}>
       
            <TextField sx={{background:"url(https://img.freepik.com/free-photo/white-crumpled-paper-texture-background-design-space-white-tone_1258-78696.jpg?w=1800&t=st=1668364849~exp=1668365449~hmac=4f3352146117b55bd624ed922e88d5913590fe62d3eeaa38fbae504457d6644b)", transform:"rotate(-0.4deg)", filter:"drop-shadow(-1px 1px 1px black)", width:"70vw", height:"4.5vh"}}
                margin="normal"
                variant="standard"
                required
                fullWidth
                id="title"
                placeholder="Give your post a title!"
                name = 'title'
                inputProps={{style:{fontFamily: "Righteous", textAlign:"center"}}}

            />
            <TextField sx={{background:"url(https://img.freepik.com/free-photo/white-crumpled-paper-texture-background-design-space-white-tone_1258-78696.jpg?w=1800&t=st=1668364849~exp=1668365449~hmac=4f3352146117b55bd624ed922e88d5913590fe62d3eeaa38fbae504457d6644b)", filter:"drop-shadow(-1px 1px 1px black)"}}
                placeholder="Write something here..."
                id="body"
                name = 'body'
                multiline
                fullWidth
                rows={12}
                inputProps={{style:{fontFamily: "Righteous", width: '55.55555555555556vw', height:'23.8vw'}}}
            />
                    <Button 
                        type="submit"
                        variant="contained"
                        sx={{fontFamily: "Calligraffitti", backgroundColor: "#59260B", borderRadius: "50%", border:2, borderColor:"white", borderStyle:"double", transform:"rotate(2deg)", marginBottom:3, left:"65vw", top:"1vw", maxWidth:"7vw", maxHeight:"5.9vh", minWidth:"7vw", minHeight:"6.5vh"}}>
                        Submit
                    </Button>
            
            </Box>
            </Box>
            </Box>
        </Container>
        
        </Container>
        
    )
}
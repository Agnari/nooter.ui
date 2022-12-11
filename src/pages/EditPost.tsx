import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { getToken } from "../utils/auth";

export function EditPost() {
    const [id, setId] = useSearchParams();

    const userStr = localStorage.getItem("USER");
    const [user, setUser] = useState(userStr ? JSON.parse(userStr) : null);

    const Swal = require('sweetalert2');
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [imageURL,setImageURL] = useState("");

    useEffect(() => {
        fetch("https://localhost:7018/api/comments/" + id.get("id"))
            .then(res => res.json())
            .then(
                (result) => {
                    setTitle(result.title);
                    setBody(result.body);
                    setImageURL(result.imageURL);
                }
            )
    }, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            title: data.get('title'),
            body: data.get('body'),
            imageURL: data.get('photo'),
        });

        const token = getToken();
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
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    title: data.get('title'),
                    body: data.get('body'),
                    imageURL: data.get('photo'),
                    authorId: user.userId,
                })
            };
            fetch('https://localhost:7018/api/articles/' + id.get("id"), requestOptions)
                .then(() => navigate("/yourposts/user?id=" + user.userId))

                Swal.fire({
                    title: 'Good job!',
                    text: 'Article was changed!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
        }
    }

    return (

        <Container style={{background: "url(https://www.tilingtextures.com/wp-content/uploads/2018/11/0068-1-512x512.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} sx={{width:"87%", border:5, transform:"translate(0vw, 7vh)", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", borderStyle: "dashed", filter:"drop-shadow(5px 5px 5px black)"}}>
        <img src={require("../stickers/fuqno.png")} style={{height:'7.936507936507937vw', width:'7.936507936507937vw', filter:"drop-shadow(3px 3px 3px black)", transform:"translate(-4.761904761904762vw, -5.154639175257732vh) rotate(45deg)"}}/> 
        <img src={require("../stickers/anber.png")} style={{height:'7.936507936507937vw', width:'7.936507936507937vw', filter:"drop-shadow(-3px 3px -3px black)", transform:"translate(70vw, -5vh) rotate(-45deg)"}}/> 
                <Container component="form" noValidate onSubmit={handleSubmit} maxWidth="md" sx={{ transform:"translate(0vw, -14.727540500736376vh)", marginBottom:-10, width:"70vw"}}>
                <h2 style={{fontFamily: "Calligraffitti, cursive", fontSize: 30 }}>Edit Post</h2>

                    <TextField sx={{background:"url(https://img.freepik.com/free-photo/white-crumpled-paper-texture-background-design-space-white-tone_1258-78696.jpg?w=1800&t=st=1668364849~exp=1668365449~hmac=4f3352146117b55bd624ed922e88d5913590fe62d3eeaa38fbae504457d6644b)", transform:"rotate(-1deg)"}}
                        id="title"
                        name="title"
                        margin="normal"
                        variant="standard"
                        placeholder="Change Post Title..."
                        fullWidth
                        required
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        inputProps={{style:{fontFamily: "Righteous"}}}
                        InputLabelProps={{style:{fontFamily: "Righteous"}}}

                    />
            <TextField sx={{background:"url(https://img.freepik.com/free-photo/white-crumpled-paper-texture-background-design-space-white-tone_1258-78696.jpg?w=1800&t=st=1668364849~exp=1668365449~hmac=4f3352146117b55bd624ed922e88d5913590fe62d3eeaa38fbae504457d6644b)", transform:"rotate(-2deg)"}}
                        id="body"
                        name="body"
                        placeholder="Write something again!"
                        value={body}
                        onChange={event => setBody(event.target.value)}
                        multiline
                        fullWidth
                        rows={12}
                        inputProps={{ style: { fontFamily: "Righteous" } }}
                        InputLabelProps={{ style: { fontFamily: "Righteous" } }}
                    />
                    <Grid container>
                        <Grid item xs></Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, fontFamily: "Calligraffitti", backgroundColor: "#59260B", borderRadius: "50%",top:"4vw", }}
                                >
                                Submit Changes
                            </Button>

                        </Grid>

                    
                    </Grid>

                    <h2 style={{fontFamily: "Calligraffitti, cursive", fontSize: 30 }}> Change image's URL: </h2>

                    <TextField sx={{background:"url(https://img.freepik.com/free-photo/white-crumpled-paper-texture-background-design-space-white-tone_1258-78696.jpg?w=1800&t=st=1668364849~exp=1668365449~hmac=4f3352146117b55bd624ed922e88d5913590fe62d3eeaa38fbae504457d6644b)", transform:"rotate(0deg)", filter:"drop-shadow(-1px 1px 1px black)", width:"25vw", height:"4.5vh",top:"-6vw", left:"17vw",border: 1}}
                    margin="normal"
                    variant="standard"
                    required
                    fullWidth
                    id="photo"
                    placeholder="Enter URL!"
                    name = 'photo'
                    value={imageURL}
                    onChange={event => setImageURL(event.target.value)}
                    inputProps={{style:{fontFamily: "Righteous", textAlign:"center"}}}

                    />
                </Container>
            </Container>
    )
}
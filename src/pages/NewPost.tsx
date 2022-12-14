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
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { getToken } from "../utils/auth";

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
            imageURL: data.get('photo'),
            authorId: user.userId,
        });

        if (data.get('title') === '') {
            Swal.fire({
                title: 'Error!',
                text: 'Title is missing',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }

        else if (data.get('body') === '') {
            Swal.fire({
                title: 'Error!',
                text: 'Text is missing',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }

        else {

            var link;

            if (data.get('photo') === '') {
                link = "https://m.media-amazon.com/images/M/MV5BZDk4OWIxYzYtNzdmNC00MjA0LTkzNjAtNGNlNDE5ZWI3YWYzXkEyXkFqcGdeQXVyMzYwOTgxNTY@._V1_FMjpg_UX1000_.jpg";
            }
            else {
                link = data.get('photo');
            }
            const token = getToken();
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: data.get('title'),
                    body: data.get('body'),
                    imageURL: link,
                })
            };

            fetch('https://localhost:7018/api/articles', requestOptions)
                .then(result => result.json())
                .then((article) => {
                    navigate(`/read/${article.id}`);
                })
        }
    }

    return (
        <Container>
            <Box component="form" noValidate onSubmit={handleSubmit}>
                <Container sx={{ display: "flex", flexDirection: "row", gap: "13vw" }}>
                    <Container>
                    <TextField sx={{ width: "50vw", marginTop: "3vh", padding:1, background:"white", borderRadius:10 }}
                        margin="normal"
                        variant="standard"
                        required
                        fullWidth
                        id="title"
                        placeholder="Give your post a title!"
                        name='title'
                        InputProps={{ disableUnderline:true, style: { textAlign: "center", fontFamily: "Righteous", color:"black" } }} />
                        </Container>
                    <h2 style={{fontFamily:"Calligraffiti, cursive", color:"graphite"}}>Author: Me</h2>
                </Container>
                <Container sx={{ display: "flex", marginTop: "5vh", gap: "50px" }}>
                    <Container style={{ background: 'white', borderRadius: 3 }} sx={{ width: "60vw", height: "68vh", transform:"translate(0, -5vh)" }}>
                        <Container maxWidth="md">
                            <h2 style={{ fontFamily: "Righteous" }}> Add post </h2>
                            <TextField sx={{ width: "40vw" }}
                                placeholder="Write something here..."
                                id="body"
                                name='body'
                                variant="standard"
                                multiline
                                fullWidth
                                rows={12}
                                InputProps={{ disableUnderline: true, style: { fontFamily: "Righteous" } }} />
                        </Container>
                    </Container>
                    <TextField sx={{ background: "white", borderRadius: 2, width: "20vw", height: "45vh", marginTop: "5vh", transform: "rotate(5deg)" }}
                        margin="normal"
                        required
                        multiline
                        rows={12}
                        fullWidth
                        variant="standard"
                        id="photo"
                        placeholder="Wanna add an image? Add an URL!"
                        name='photo'
                        InputProps={{ disableUnderline: true, style: { textAlign: "center", fontFamily: "Righteous", height: "45vh", padding: 10, paddingTop: "20vh" } }} />
                    <Button sx={{ alignSelf: "flex-end", maxHeight: "50px", fontFamily: "Righteous", right: "10vw", borderRadius: 20, backgroundColor: "darkorange", filter: "drop-shadow(3px 3px 3px grey)" }}
                        type="submit"
                        variant="contained"
                        size="large">
                        Done!
                    </Button>
                </Container>
            </Box>
        </Container>
    )

}
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
                <Container>
                    <TextField sx={{ width: "50vw", marginTop: "3vh", left:"20vw", padding: 1, filter:"box-shadow(2px 3px 20px black, 0 0 60px #8a4d0f inset)", background: "#fffef0", border: 1, borderStyle: "dashed"}}
                        margin="normal"
                        variant="standard"
                        required
                        fullWidth
                        id="title"
                        placeholder="Give your post a title!"
                        name='title'
                        InputProps={{ disableUnderline: true, style: { textAlign: "center", fontFamily: "Righteous", color: "black" } }} />
                </Container>
                <Container sx={{ display: "flex", marginTop: "5vh", gap: "50px" }}>
                    <Container style={{ background: "white", border: "2px solid #cecece", borderRadius: 3 }} sx={{ width: "60vw", height: "68vh" }}>
                        <Container maxWidth="md" sx={{ display: "flex", margin: "auto" }}>
                            <div style={{ width: "1px", float: "left", height: "67.6vh", marginLeft: "35px", borderLeft: "1px solid green", borderRight: "1px solid green" }}></div>
                            <TextField 
                                id="body"
                                name='body'
                                variant="standard"
                                size="medium"
                                multiline
                                fullWidth
                                rows={22}
                                InputProps={{ disableUnderline: true, style: { fontFamily: "Righteous", textDecoration:"underline", textDecorationColor:"#cecece", color:"grey" } }} />
                        </Container>
                    </Container>
                    <TextField sx={{ background: "#ccffcc", width: "20vw", height: "35vh", marginTop: "5vh", transform: "rotate(5deg)", filter:"drop-shadow(2px 2px 2px grey)" }}
                        margin="normal"
                        required
                        multiline
                        rows={12}
                        fullWidth
                        variant="standard"
                        id="photo"
                        placeholder="Wanna add an image? Add an URL!"
                        name='photo'
                        InputProps={{ disableUnderline: true, style: { textAlign: "center", fontFamily: "Cabin Sketch", fontWeight: "bold", textDecoration:"underline", textDecorationStyle:"dashed", textDecorationColor:"grey", height: "45vh", padding: 10 } }} />
                    <Button sx={{ alignSelf: "flex-end", maxHeight: "50px", fontFamily: "Righteous", right: "15vw", bottom: "4vh", borderRadius: 20, border: 1, borderColor: "black", borderStyle: "dashed", backgroundColor: "darkorange", filter: "drop-shadow(3px 3px 3px grey)" }}
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
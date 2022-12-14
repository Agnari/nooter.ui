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
                link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFhmYdSEADE38XKSaXSNMa9qLWvUzSwkEYg&usqp=CAU";
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
            <Container sx={{ display: "flex", flexDirection: "row", gap: "15vw" }}>
                <Box component="form" noValidate onSubmit={handleSubmit}>
                    <TextField sx={{width:"50vw", background:"white", marginTop:"3vh", borderRadius:10}}
                        margin="normal"
                        variant="standard"
                        required
                        fullWidth
                        id="title"
                        placeholder="Give your post a title!"
                        name='title'
                        inputProps={{ style: { textAlign: "center", fontFamily: "Righteous" } }} />
                </Box>
                <h2>Author name</h2>
            </Container>
            <Container sx={{ display: "flex", marginTop: "5vh", gap: "50px" }}>
                <Container className="paperStack" style={{ background: 'white' }} sx={{ width: "60vw", height: "60vh", transform: "translate(0, -10vh)" }}>
                    <Container maxWidth="md">

                        <h2 style={{ fontFamily: "Righteous" }}> Add post </h2>

                        <Box component="form" noValidate onSubmit={handleSubmit}>
                            <Box sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <Box sx={{ mt: 1 }}>
                                    <TextField sx={{ width: "40vw", bottom: "5vh" }}
                                        placeholder="Write something here..."
                                        id="body"
                                        name='body'
                                        multiline
                                        fullWidth
                                        rows={12}
                                        inputProps={{ style: { fontFamily: "Righteous" } }} />
                                </Box>
                            </Box>
                        </Box>
                    </Container>

                </Container>
                <TextField sx={{ maxHeight: "40vh", background: "white", width: "20vw", height: "45vh", marginTop: "5vh", transform: "rotate(5deg)" }}
                    margin="normal"
                    required
                    multiline
                    rows={12}
                    fullWidth
                    id="photo"
                    placeholder="Wanna add an image? Add an URL!"
                    name='photo'
                    inputProps={{ style: { textAlign: "center", fontFamily: "Righteous" } }} />
                <Button sx={{ alignSelf: "flex-end", maxHeight: "50px", fontFamily: "Righteous", right:"10vw" }}
                    type="submit"
                    variant="contained">
                    Done!
                </Button>
            </Container>
        </Container>
    )

}
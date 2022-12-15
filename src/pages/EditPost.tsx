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
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        fetch("https://localhost:7018/api/articles/" + id.get("id"))
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
        <Container>
            <Box component="form" noValidate onSubmit={handleSubmit}>
                <Container sx={{ display: "flex", flexDirection: "row", gap: "13vw" }}>
                    <Container>
                    <TextField sx={{ width: "50vw", marginTop: "3vh", padding:1, background:"white", borderRadius:10 }}
                            id="title"
                            name="title"
                            margin="normal"
                            variant="standard"
                            placeholder="Change Post Title..."
                            fullWidth
                            required
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            inputProps={{ style: { fontFamily: "Righteous" } }}
                            InputLabelProps={{ style: { fontFamily: "Righteous" } }} />
                    </Container>
                    <Container sx={{ display: "flex", marginTop: "5vh", gap: "50px" }}>
                        <Container style={{ background: 'white', borderRadius: 3 }} sx={{ width: "60vw", height: "68vh", transform: "translate(0, -5vh)" }}>
                            <Container maxWidth="md">

                            <TextField sx={{ width: "40vw" }}
                                    id="body"
                                    name="body"
                                    placeholder="Write something again!"
                                    value={body}
                                    onChange={event => setBody(event.target.value)}
                                    multiline
                                    fullWidth
                                    rows={12}
                                    inputProps={{ style: { fontFamily: "Righteous" } }}
                                    InputLabelProps={{ style: { fontFamily: "Righteous" } }} />
                            </Container>
                        </Container>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, fontFamily: "Calligraffitti", backgroundColor: "#59260B", borderRadius: "50%", top: "4vw", }}
                        >
                            Submit Changes
                        </Button>

                        <TextField sx={{ background: "white", borderRadius: 2, width: "20vw", height: "45vh", marginTop: "5vh", transform: "rotate(5deg)" }}
                            margin="normal"
                            variant="standard"
                            required
                            fullWidth
                            id="photo"
                            placeholder="Enter URL!"
                            name='photo'
                            value={imageURL}
                            onChange={event => setImageURL(event.target.value)}
                            inputProps={{ style: { fontFamily: "Righteous", textAlign: "center" } }} />

                    </Container>
                </Container>
            </Box>
        </Container>
    )
}
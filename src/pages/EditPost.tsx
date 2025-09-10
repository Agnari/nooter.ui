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
        fetch(`${process.env.REACT_APP_API_URL}/api/articles/` + id.get("id"))
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
            fetch(`${process.env.REACT_APP_API_URL}/api/articles/` + id.get("id"), requestOptions)
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
                <Container>
                    <TextField sx={{ width: "50vw", marginTop: "3vh", left: "20vw", padding: 1, filter: "box-shadow(2px 3px 20px black, 0 0 60px #8a4d0f inset)", background: "#fffef0", border: 1, borderStyle: "dashed" }}
                        margin="normal"
                        variant="standard"
                        required
                        fullWidth
                        id="title"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
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
                                value={body}
                                onChange={event => setBody(event.target.value)}
                                variant="standard"
                                size="medium"
                                multiline
                                fullWidth
                                rows={22}
                                InputProps={{ disableUnderline: true, style: { fontFamily: "Righteous", textDecoration: "underline", textDecorationColor: "#cecece", color: "grey" } }} />
                        </Container>
                    </Container>
                    <Container sx={{ background: "#ccffcc", width: "20vw", height: "35vh", marginTop: "5vh", transform: "rotate(5deg)", filter: "drop-shadow(2px 2px 2px grey)", display: "inline-flex" }}>
                        <TextField
                            margin="normal"
                            required
                            multiline
                            rows={10}
                            fullWidth
                            variant="standard"
                            id="photo"
                            value={imageURL}
                            onChange={event => setImageURL(event.target.value)}
                            placeholder="Wanna add an image? Add an URL!"
                            name='photo'
                            InputProps={{ disableUnderline: true, style: { textAlign: "center", fontFamily: "Cabin Sketch", fontWeight: "bold", textDecoration: "underline", textDecorationStyle: "dashed", textDecorationColor: "grey", height: "45vh", padding: 10 } }} />
                    </Container>
                    <Button sx={{ alignSelf: "flex-end", maxHeight: "50px", padding: 4, fontFamily: "Righteous", right: "15vw", bottom: "4vh", borderRadius: 20, border: 1, borderColor: "black", borderStyle: "dashed", backgroundColor: "#A97637", filter: "drop-shadow(3px 3px 3px grey)" }}
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
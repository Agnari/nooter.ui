import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Popover, TextField, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import React from "react";
import Swal from 'sweetalert2'
import { getToken } from "../utils/auth";

export function Comments() {
    const userStr = localStorage.getItem("USER");
    const [user, setUser] = useState(userStr ? JSON.parse(userStr) : null);
    const Swal = require('sweetalert2');
    const navigate = useNavigate();
    const { id } = useParams()
    const [text, setText] = useState("");
    const [UserName, setUserName] = useState("");
    const [items, setItems] = useState([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            text: data.get('text'),
            authorId: user.userId,
        });

        const token = getToken();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: data.get('text'),
                articleId: id,

            })
        };
        if (data.get('text') === '') {
            Swal.fire({
                title: 'Error!',
                text: 'Text is missing',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
        fetch('https://localhost:7018/api/comments/', requestOptions)
        .then (()=>navigate(window.location.pathname))

    }
    useEffect(() => {
        fetch("https://localhost:7018/api/comments/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    console.log(result);
                }
            )
    }, [id])
    console.log(items);



    return (
        <>
            <main>
                <Box sx={{ m: 1 }}>
                    <Container sx={{ maxWidth: '95vw', width: '90vw', align: 'center' }}>
                        <Card sx={{ paddingBottom: "5vw", borderRadius: 3, border: 5, borderStyle: "dashed", background: "linear-gradient(45deg, white, lightgrey)" }}>
                            <CardContent sx={{ size: "fixed", marginLeft: 5 }}>
                                <Typography variant="h4" align="center" sx={{ overflowWrap: "break-word", fontFamily: "Righteous" }}>
                                    Comments
                                </Typography>

                            </CardContent>
                            <List >
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, paddingTop: '5vh' }}>
                                    <Card sx={{ border: 1, borderRadius: '50px' }}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar alt="?" src="/static/images/avatar/1.jpg" />
                                            </ListItemAvatar>

                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                />
                                                <TextField
                                                    variant="standard"
                                                    fullWidth
                                                    id="text"
                                                    placeholder="Comment here"
                                                    name='text'
                                                />
                                                <Button
                                                    type="submit"
                                                    variant="contained">
                                                    Submit
                                                </Button>
                                            </React.Fragment>
                                        </ListItem>
                                    </Card>
                                </Box>
                                <Grid container spacing={0.5} sx={{ transform: "translate(1.5873015873015872vw, -3vw)" }}>
                                            {items && items.map((Comment: any) => (
                                                <Grid item key={Comment.id}>
                                                    <Card sx={{ border: 1, borderRadius: '50px' }}>
                                                        <ListItem alignItems="flex-start">
                                                            <ListItemAvatar>
                                                                <Avatar alt="?" src="/static/images/avatar/1.jpg" />
                                                            </ListItemAvatar>
                                                            <ListItemText
                                                                primary={Comment.commenterName}
                                                                secondary={
                                                                    <React.Fragment>
                                                                        <Typography
                                                                            sx={{ display: 'inline' }}
                                                                            component="span"
                                                                            variant="body2"
                                                                            color="text.primary"
                                                                        >
                                                                        </Typography>
                                                                        {Comment.text}
                                                                    </React.Fragment>
                                                                }
                                                            />
                                                        </ListItem>
                                                    </Card>
                                                </Grid>
                                            ))}
                                </Grid>
                                < Divider variant="inset" component="li" />
                            </List>
                        </Card>

                    </Container>
                </Box>
            </main>


        </>
    )
}

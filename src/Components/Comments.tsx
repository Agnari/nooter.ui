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
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = getToken();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: value,
                articleId: id,

            })
        };
        if (value === '') {
            Swal.fire({
                title: 'Error!',
                text: 'Text is missing',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
        else {
            fetch('https://localhost:7018/api/comments/', requestOptions)
                .then(() => Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Comment was added',
                    showConfirmButton: false,
                    timer: 1500
                }))
                .then(() => fetch("https://localhost:7018/api/comments/" + id)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            setValue('');
                            setItems(result);
                            console.log(result);
                        }
                    )
                )
        }
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

    return (
        <>
            <main>
                <Container sx={{ width: '30vw', marginTop: 2 }}>
                    <Card sx={{ paddingBottom: "5vw", borderRadius: 3, border: 5, borderStyle: "dashed", background: "linear-gradient(45deg, white, lightgrey)", padding: 1 }}>
                        <List >
                            {user && <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <Card sx={{ border: 1, borderRadius: '50px', marginBottom: 3, borderBottom: 2 }}>
                                    <ListItem alignItems="flex-start">
                                        <Container sx={{ display: "flex", fkexDirection: "row" }}>
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                />
                                                <TextField sx={{ width: "9vw" }}
                                                    variant="standard"
                                                    fullWidth
                                                    id="text"
                                                    placeholder="Comment here"
                                                    name='text'
                                                    value={value}
                                                    onChange={(e) => setValue(e.target.value)}
                                                />

                                            </React.Fragment>
                                        </Container>
                                        <Button sx={{ background: "orange" }}
                                            type="submit"
                                            variant="contained"
                                            size="small">
                                            Submit
                                        </Button>
                                    </ListItem>
                                </Card>
                            </Box>}
                            <Grid container spacing={0.5}>
                                {items && items.map((Comment: any) => (
                                    <Grid item key={Comment.id}>
                                        <Card sx={{ border: 1, borderRadius: '50px', maxWidth: "25vw" }}>
                                            <ListItem alignItems="flex-start">
                                                <ListItemText disableTypography
                                                    primary={Comment.commenterName} style={{ fontFamily: "Righteous" }}
                                                    secondary={
                                                        <Container sx={{ wordBreak: "break-all" }}>
                                                            <Typography
                                                                sx={{ display: 'inline' }}
                                                                component="span"
                                                                variant="body2"
                                                                color="text.primary"
                                                            >
                                                            </Typography>
                                                            {Comment.text}
                                                        </Container>
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
            </main>


        </>
    )
}
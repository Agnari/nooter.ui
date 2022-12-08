import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Popover, TextField, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import React from "react";
export function Comments() {

    const { id } = useParams()
    const [text, setText] = useState("");
    const [UserName, setUserName] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7018/api/comments/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setText(result.text);
                    setUserName(result.UserName);
                    setItems(result);
                    console.log(result);
                }
            )
    }, [id])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            title: data.get('title'),
            Text: data.get('text'),
            imageURL: data.get('photo'),
        });
    }

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
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: "70vw", paddingTop: '5vh' }}>
                                    <Card sx={{ border: 1, borderRadius: '50px' }}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar alt="?" src="/static/images/avatar/1.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Username"
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                        </Typography>
                                                        <TextField
                                                            margin="none"
                                                            variant="standard"
                                                            required
                                                            fullWidth
                                                            id="title"
                                                            placeholder="Comment here"
                                                            name='title'
                                                        >

                                                        </TextField>
                                                    </React.Fragment>

                                                }
                                            />
                                        </ListItem>
                                    </Card>
                                </Box>
                                <Grid container spacing={0.5} sx={{ transform: "translate(1.5873015873015872vw, -3vw)" }}>

                                    {items && items.map((Comment: any) => (
                                        <Stack spacing={4}>
                                            <Stack direction='row' spacing={2}>
                                                <Grid item key={Comment.id}>
                                                    <Card sx={{ border: 1, borderRadius: '50px' }}>
                                                        <ListItem alignItems="flex-start">
                                                            <ListItemAvatar>
                                                                <Avatar alt="?" src="/static/images/avatar/1.jpg" />
                                                            </ListItemAvatar>
                                                            <ListItemText
                                                                primary="Username"
                                                                secondary={
                                                                    <React.Fragment>
                                                                        <Typography
                                                                            sx={{ display: 'inline' }}
                                                                            component="span"
                                                                            variant="body2"
                                                                            color="text.primary"
                                                                        >
                                                                        </Typography>
                                                                        {text}
                                                                    </React.Fragment>
                                                                }
                                                            />
                                                        </ListItem>
                                                    </Card>
                                                </Grid>
                                            </Stack>
                                        </Stack>
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

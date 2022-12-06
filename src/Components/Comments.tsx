import { Avatar, Box, Button, Card, CardContent, Container, Divider, List, ListItem, ListItemAvatar, ListItemText, Popover, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import React from "react";
export function Comments() {
    const { id } = useParams()
    const [text, setText] = useState("");
    const [articleId, setarticleId] = useState("");
    const [article, setArticle] = useState("");

    useEffect(() => {
        fetch("https://localhost:7018/api/comments/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setText(result.text);
                    setarticleId(result.articleId);
                    setArticle(result.article);
                }
            )
    }, [id])
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
      <Divider variant="inset" component="li" />
    </List>
                        </Card>
                    </Container>
                </Box>
            </main>
            
            
        </>
    )
}

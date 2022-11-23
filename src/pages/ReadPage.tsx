import '../styles.css'
import { useParams } from "react-router-dom";
import { Typography, Card, CardActions, CardContent, CardMedia, Grid, Container, Button } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';

export function ReadPage() {

    let articles = useParams();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        fetch("https://localhost:7018/api/articles/" + articles.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setTitle(result.title);
                    setBody(result.body);
                }
            )
    }, [])
    return (
        <>
            <main>
                <Box sx={{ m: 10 }}>
                    <Container sx={{maxWidth:'95vw', width:'90vw', align:'center'}}>

                        <Card sx={{ paddingBottom: "5vw", borderRadius: 3, border: 5, borderStyle: "dashed", background: "linear-gradient(45deg, white, lightgrey)" }}>
                            <CardMedia sx={{ borderBottomColor: "black", borderRadius: 3, borderBottom: 10, borderBottomStyle: "double" }}
                                component="img"
                                height="400"
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent sx={{ size: "fixed", marginLeft: 5 }}>
                                <Typography variant="h2" align="center" sx={{ overflowWrap: "break-word", fontFamily: "Righteous" }}>
                                    {title}
                                </Typography>
                                <Typography gutterBottom align="center">
                                    _________________________________________________________________________
                                </Typography>
                                <Typography paragraph align="left" sx={{ overflowWrap: "break-word", display: "block", fontFamily: "Roboto" }}>
                                    {body}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Container>
                </Box>
            </main>
        </>
    );
}

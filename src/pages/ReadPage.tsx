

import { useParams } from "react-router-dom";
import { Typography, Card, CardActions, CardContent, CardMedia, Grid, Container, Button } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';

export function ReadPage(){

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
    return(
        <> 
            <main>
                <Box sx={{ m: 10 }}>
                <Container maxWidth="md">

                            <Card>
                                <CardMedia
                                 component="img"
                                 height="400"
                                 image="https://source.unsplash.com/random"
                                 title="Image title"
                                />
                                <CardContent sx={{size:"fixed", marginLeft: 5}}>
                                    <Typography variant="h2" align ="center">
                                        {title}
                                    </Typography>
                                    <Typography gutterBottom align ="center">
                                       _________________________________________________________________________
                                    </Typography>
                                    <Typography gutterBottom variant="h6" align ="center">
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

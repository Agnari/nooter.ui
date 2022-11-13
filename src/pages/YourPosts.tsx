import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export function YourPosts() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7018/api/articles")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    console.log(result);
                }
            )
    }, [])
    
    return (
        <Container maxWidth="md">
            <h2 style={{ fontFamily: "Righteous" }}>Your Posts</h2>
            <Grid container spacing={4}>
                {items.map((articles:any) => (
                    <Grid item key={articles.title} xs={12} sm={12} md={12}>
                        <Card
                            sx={{ height: '87%', display: 'flex', flexDirection: 'column', borderRadius: 3, borderBottom: (theme) => `8px solid ${theme.palette.divider}`, borderStyle: "solid", borderColor: "#A97637" }}
                        >
                            <Stack direction="row">
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <p style={{ fontFamily: "Righteous", fontWeight: "bold", fontSize: 15, color: "#181818" }}>
                                        {articles.title}
                                    </p>
                                </CardContent>
                                <CardActions>
                                    <Button component={Link} to={'/editpost/'+articles.id} size="small" variant="contained" style={{ fontFamily: "Righteous", color: "black", backgroundColor: "#A97637", borderRadius: 20 }} sx={{ border: 0.7, borderColor: "darkgrey" }}>Edit</Button>
                                </CardActions>
                            </Stack>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
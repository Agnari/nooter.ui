import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import * as React from 'react';
import Box from '@mui/material/Box';

const title = ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5']


export function YourPosts() {
    return (

            <Container maxWidth="md">
            <Container>
            <h2 style={{fontFamily: "Righteous", background: "lightgrey", borderRadius: 10}}>Your Posts</h2>
            </Container>
            <Grid container spacing={4}>
                {title.map((title) => (
                    <Grid item key={title} xs={12} sm={12} md={12}>
                        <Card
                            sx={{ height: '87%', display: 'flex', flexDirection: 'column', borderRadius: 3, borderBottom: (theme) => `8px solid ${theme.palette.divider}`, borderStyle: "solid", borderColor: "#A97637" }}
                        >
                            <Stack direction="row">
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <p style={{fontFamily: "Righteous", fontWeight: "bold", fontSize: 15, color: "#181818" }}>
                                        {title}
                                    </p>
                                </CardContent>
                                <CardActions>
                                    <Button href="/editpost" size="small" variant="contained" style={{ fontFamily: "Righteous", color: "black", backgroundColor: "#A97637", borderRadius: 20 }} sx={{ border: 0.7, borderColor: "darkgrey" }}>Edit</Button>
                                </CardActions>
                            </Stack>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
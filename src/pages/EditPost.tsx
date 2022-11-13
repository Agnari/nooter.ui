import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export function EditPost() {
    let articles = useParams();
    const navigate = useNavigate();
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            title: data.get('title'),
            body: data.get('body'),
        });

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: articles.id,
                title: data.get('title'),
                body: data.get('body'),
            })
        };
        fetch('https://localhost:7018/api/articles/' + articles.id, requestOptions)
            .then(() => navigate('/yourposts'))
    }

    return (
        <Container style={{ background: "linear-gradient(to left, #A97637, #60759c)", borderRadius: 40 }} sx={{ width: '83%' }}>
            <Container style={{ background: "linear-gradient(45deg, white, #a8a7a7", borderRadius: 20 }}>

                <Container component="form" noValidate onSubmit={handleSubmit} maxWidth="md">
                    <h2 style={{ fontFamily: "Righteous", paddingTop: 15, fontSize: 30 }}>Edit Post</h2>

                    <TextField
                        id="title"
                        name="title"
                        margin="normal"
                        variant="standard"
                        fullWidth
                        required
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        inputProps={{ style: { fontFamily: "Righteous" } }}
                        InputLabelProps={{ style: { fontFamily: "Righteous" } }}

                    />
                    <TextField
                        id="body"
                        name="body"
                        value={body}
                        onChange={event => setBody(event.target.value)}
                        multiline
                        fullWidth
                        rows={12}
                        inputProps={{ style: { fontFamily: "Righteous" } }}
                        InputLabelProps={{ style: { fontFamily: "Righteous" } }}
                    />
                    <Grid container>
                        <Grid item xs></Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: "#A97637", borderRadius: 10, fontFamily: "Righteous" }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </Container>
    )
}
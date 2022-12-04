import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../styles.css';
import { getToken } from '../utils/auth';

export function YourPosts() {
    const [id, setId] = useSearchParams();
    const Swal = require('sweetalert2');

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7018/api/articles/" + id.get("id") + "/usersAllArticles")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    console.log(result);
                }
            )
    }, [])

    const token = getToken();
    const deletePost = (id: string) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            iconColor: "red",
            color: "red",
            showCancelButton: true,
            confirmButtonColor: 'darkred',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result: any) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Article has been deleted.',
                    'success'
                )
                fetch("https://localhost:7018/api/articles/" + id, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    method: 'DELETE'
                })
                setItems((items) => items.filter((article: any) => article.id !== id))
            }
        })
    }

    return (
        <Container className="paperStack" maxWidth="md" >
            <h2 className="hover1" style={{ fontFamily: "Cabin Sketch", fontSize: 50, height: 44, width: 300 }}> <DoneOutlineIcon sx={{ color: "black" }} />Your Posts
                <img className="ducktrigger" src={require("../stickers/wtf.png")} alt="lol no" style={{ height: "30px", width: "30px", transform: "rotate(3deg)" }} />
                Your Posts
            </h2>
            <Grid container spacing={0.5} sx={{ transform: "translate(1.5873015873015872vw, -3vw)" }}>
                {items.map((articles: any) => (
                    <Grid item key={articles.id} xs={12} sm={12} md={6}>
                        <CheckCircleOutlineIcon sx={{ transform: "translate(-28px, 20px)", color: "darkred", filter: "drop-shadow(1px 1px 1px black)" }} />

                        <Card sx={{ height: '87%', width: '95%', display: 'flex', background: "../backgrounds/wall.jpg", flexDirection: 'column', borderBottom: (theme) => `5px solid ${theme.palette.divider}`, borderColor: "#41424C", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", maxHeight: "10vw", filter: "invert(15%)", paddingBottom: 5 }}>
                            <Stack direction="row">
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <p className="hover1" style={{ fontFamily: "Righteous", fontSize: 35, WebkitTextStrokeWidth: 2, WebkitTextStrokeColor: "39393F", WebkitTextFillColor: "white" }}>
                                        {articles.title}
                                    </p>
                                </CardContent>
                                <CardActions>

                                    <Button className="hover-2" component={Link} to={'/editpost/' + articles.title.replace(/ /g, '-') + '?id=' + articles.id} size="small" variant="contained" style={{ fontFamily: "Righteous", fontSize: 20, color: "black", backgroundColor: "#C09372", padding: "10px 15px 20px" }}><p style={{ margin: 0, padding: 0, marginLeft: 6, filter: "drop-shadow(0.5px 0.5px 0.5px black)" }}>Edit</p></Button>
                                    <Button className="hover-2" onClick={() => deletePost(articles.id)} size="small" variant="contained" style={{ fontFamily: "Righteous", fontSize: 20, color: "black", backgroundColor: "#8B0000", padding: "10px 15px 20px" }}><p style={{ margin: 0, padding: 0, marginLeft: 6, filter: "drop-shadow(0.5px 0.5px 0.5px black)" }}>Delete</p></Button>

                                </CardActions>
                            </Stack>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
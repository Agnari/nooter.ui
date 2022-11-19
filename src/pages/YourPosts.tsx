import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../styles.css';

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

    const deletePost = (id: string) => {
        fetch("https://localhost:7018/api/articles/" + id, { method: 'DELETE' })
        setItems((items) => items.filter((article: any) => article.id !== id))
    }

    return (
        <Container className="paperStack" maxWidth="md" >
            <h2 className="hover1" style={{ fontFamily: "Cabin Sketch", fontSize: 50, height: 44, width: 300 }}> <DoneOutlineIcon sx={{ color: "black" }} />Your Posts
                <img className="ducktrigger" src={require("../stickers/wtf.png")} alt="lol no" style={{ height: "30px", width: "30px", transform: "rotate(3deg)" }} />
                Your Posts
            </h2>
            <Grid container spacing={0.5} sx={{ transform: "translate(1.5873015873015872vw, -3vw)" }}>
                {items.map((articles: any) => (
                    <Grid item key={articles.title} xs={12} sm={12} md={6}>
                        <CheckCircleOutlineIcon sx={{ transform: "translate(-28px, 20px)", color: "darkred", filter: "drop-shadow(1px 1px 1px black)" }} />

                        <Card sx={{ height: '87%', width: '95%', display: 'flex', background: "../backgrounds/wall.jpg", flexDirection: 'column', borderBottom: (theme) => `5px solid ${theme.palette.divider}`, borderColor: "#41424C", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", maxHeight: "10vw", filter: "invert(15%)", paddingBottom: 5 }}>
                            <Stack direction="row">
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <p className="hover1" style={{ fontFamily: "Righteous", fontSize: 35, color: "#4B4E53" }}>
                                        {articles.title}
                                    </p>
                                </CardContent>
                                <CardActions>

                                    <Button className="hover-2" component={Link} to={'/editpost/' + articles.id} size="small" variant="contained" style={{ fontFamily: "Cabin Sketch", fontSize: 20, color: "black", backgroundColor: "#C09372", padding: "10px 15px 20px" }}>Edit</Button>
                                    <Button className="hover-2" onClick={() => deletePost(articles.id)} size="small" variant="contained" style={{ fontFamily: "Cabin Sketch", fontSize: 20, color: "black", backgroundColor: "#8B0000", padding: "10px 15px 20px" }}>Delete</Button>

                                </CardActions>
                            </Stack>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
import { Typography, Card, CardActions, CardContent, CardMedia, Grid, Container, Button } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

export function Home(){

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7018/api/articles")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              console.log(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
            }
          )
      }, [])
      
      const [loading, setLoading] = React.useState(true);
        function handleClick() {
        setLoading(true);
         }
    
    return(
    <> 
        <main>
            <div >
                <Container maxWidth="sm" style={{marginTop: '100px'}}>
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Welcome Back
                    </Typography>

                </Container>
            </div>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    {items && items.map((article:any) => (
                        <Grid item key = {article.id} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardMedia
                             component="img"
                             height="194"
                             image="https://source.unsplash.com/random"
                             title="Image title"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    {article.title}
                                </Typography>
                                <Typography>
                                    {article.body}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="text" size="small" color="primary">
                                    Read
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </main>

        <footer>
            <Typography variant="subtitle1" align="center" color="textSecondary">
            Temporary
            </Typography>

        </footer>
    </>
    );
  
}


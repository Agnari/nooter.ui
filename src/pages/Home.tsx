import { Typography, Card, CardActions, CardHeader, CardContent, Collapse, Avatar, CardMedia, Grid, Container, Button } from "@mui/material";
import { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';

export function Home() {


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

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <main>

        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {items && items.map((article: any) => (
              <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
                <Card variant="outlined" sx={{borderRadius:3, borderColor:"white", borderStyle:"dashed", transform:"translate(0vw, 13vh)", width:"20vw", height:"32vw", backgroundColor:"#1E1E1E"}}>
                  <CardHeader sx={{backgroundColor:"#1e1e1e"}} title={
                    <Typography sx={{fontSize: 15, color:"white", fontFamily:"Righteous"}}>
                      Testing font size
                    </Typography>} />
                  <CardMedia sx={{borderTopStyle:"double", borderBottomStyle:"double", borderColor:"white"}}
                    component="img"
                    height="194"
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" sx={{color:"white", fontFamily:"Righteous", width:"15vw"}}>
                      {article.title}
                    </Typography>
                    <Typography sx={{color:"white", fontFamily:"Righteous", width:"17vw"}}>
                      {article.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="text" size="small" sx={{color:"white", fontFamily:"Righteous"}}>
                      Read 
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );

}


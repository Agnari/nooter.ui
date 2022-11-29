import { Typography, Card, CardActions, Box, CardHeader, CardContent, Collapse, Avatar, CardMedia, Grid, Container, Button } from "@mui/material";
import { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';


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
              <Grid item key={article.id} xs={12} sm={6} md={4} lg={6}>
                <Card variant="outlined" sx={{ borderRadius: 3, borderColor: "#f7b500", borderStyle: "double", transform: "translate(0vw, 3vw)", backgroundColor: "#1E1E1E", maxHeight: "40vw", filter: "drop-shadow(5px 5px 5px black)" }}>
                  <CardHeader sx={{ backgroundColor: "#1e1e1e" }} title={
                    <>
                      <Typography sx={{ fontSize: 25, color: "#f7b500", fontFamily: "Righteous", fontWeight: "bold", maxHeight: "5vw" }}>
                        {article.title}
                      </Typography>
                      <Typography gutterBottom sx={{ color: "white", fontSize: "20", fontFamily: "Righteous", textOverflow: "ellipsis", overflow: "hidden", overflowWrap: "line-break", maxHeight: "10vw" }}>
                        Posted by: {article.authorName}
                      </Typography>
                    </>
                  } />
                  <CardMedia sx={{ borderTopStyle: "double", borderBottomStyle: "double", borderColor: "#A97637", borderRadius: 3, objectFit: "contain" }}
                    component="img"
                    height="194"
                    width="100%"
                    image={article.imageURL}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom sx={{ color: "white", fontSize: "20", fontFamily: "Righteous", textOverflow: "ellipsis", overflow: "hidden", overflowWrap: "line-break", maxHeight: "10vw" }}>
                      {article.body}
                    </Typography>
                  </CardContent>
                  <CardActions>

                    <Button component={Link} to={'/read/' + article.title.replace(/ /g, '-') + '?id=' + article.id} variant="text" size="small" sx={{ position: "fixed", color: "#f7b500", fontFamily: "Righteous", paddingBottom: "2vw" }}>
                      Read full article
                      <KeyboardDoubleArrowRightIcon />
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

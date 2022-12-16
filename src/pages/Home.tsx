import { Typography, Card, CardActions, CardHeader, CardContent, CardMedia, Grid, Container, Button } from "@mui/material";
import { useEffect, useState } from "react";
import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";

const SearchBar = ({ setSearchQuery }: any) => (
  <form onReset={() => setSearchQuery("")}>
    <Container sx={{ display: "flex", flexDirection: "row" }}>
      <TextField sx={{ filter: "box-shadow(2px 3px 20px black, 0 0 60px #8a4d0f inset)", background: "#fffef0", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", width: "30vw" }}
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery((e.target as HTMLInputElement).value);
        }}
        label="Looking for something?"
        variant="outlined"
        placeholder="Search..."
        size="medium"
        InputLabelProps={{ style: { fontFamily: "Cabin Sketch" } }}
      />
      <IconButton type="reset" aria-label="search">
        <ClearIcon style={{ fill: "black" }} />
      </IconButton>
    </Container>
  </form>
);

export function Home() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://localhost:7018/api/articles")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
          //setTitle(result.title);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
        }
      )
  }, [])

  const filterData = (query: any, items: any) => {
    if (!query) {
      return items;
    } else {
      return items.filter((d: any) => d.title.toLowerCase().includes(query) || d.body.toLowerCase().includes(query));
    }
  };
  const dataFiltered = filterData(searchQuery, items);

  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  return (
    <>
      <main>

        <Container maxWidth="xl" sx={{ pt: 2 }}>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Grid container spacing={4}>
            {dataFiltered.map((article: any) => (
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

                    <Button component={Link} to={`/read/${article.id}`} variant="text" size="small" sx={{ position: "fixed", color: "#f7b500", fontFamily: "Righteous", paddingBottom: "2vw" }}>
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

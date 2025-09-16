import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import Swal from "sweetalert2";
import { getToken } from "../utils/auth";

export function Comments() {
  const userStr = localStorage.getItem("USER");
  const [user] = useState(userStr ? JSON.parse(userStr) : null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState<any[]>([]);
  const [value, setValue] = useState("");

  // pick API root from env (.env file)
  const API_URL = process.env.REACT_APP_API_URL;

  const loadComments = () => {
    fetch(`${API_URL}/api/comments/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        console.log(result);
      });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = getToken();

    if (value.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "Text is missing",
        icon: "error",
        confirmButtonText: "OK"
      });
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: value,
        articleId: id
      })
    };

    fetch(`${API_URL}/api/comments/`, requestOptions)
      .then(() =>
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Comment was added",
          showConfirmButton: false,
          timer: 1500
        })
      )
      .then(() => {
        setValue("");
        loadComments();
      });
  };

  useEffect(() => {
    loadComments();
  }, [id]);

  return (
    <main>
      <Container sx={{ width: "30vw", marginTop: 2 }}>
        <Card
          sx={{
            paddingBottom: "5vw",
            borderRadius: 3,
            border: 5,
            borderStyle: "dashed",
            background: "linear-gradient(45deg, white, lightgrey)",
            padding: 1
          }}
        >
          <List>
            {user && (
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Card
                  sx={{
                    border: 1,
                    borderRadius: "50px",
                    marginBottom: 3,
                    borderBottom: 2
                  }}
                >
                  <ListItem alignItems="flex-start">
                    <Container sx={{ display: "flex", flexDirection: "row" }}>
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        />
                        <TextField
                          sx={{ width: "9vw" }}
                          variant="standard"
                          fullWidth
                          id="text"
                          placeholder="Comment here"
                          name="text"
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                        />
                      </React.Fragment>
                    </Container>
                    <Button
                      sx={{ background: "orange" }}
                      type="submit"
                      variant="contained"
                      size="small"
                    >
                      Submit
                    </Button>
                  </ListItem>
                </Card>
              </Box>
            )}
            <Grid container spacing={0.5}>
              {items &&
                items.map((Comment: any) => (
                  <Grid item key={Comment.id}>
                    <Card sx={{ border: 1, borderRadius: "50px", maxWidth: "25vw" }}>
                      <ListItem alignItems="flex-start">
                        <ListItemText
                          disableTypography
                          primary={Comment.commenterName}
                          style={{ fontFamily: "Righteous" }}
                          secondary={
                            <Container sx={{ wordBreak: "break-all" }}>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              ></Typography>
                              {Comment.text}
                            </Container>
                          }
                        />
                      </ListItem>
                    </Card>
                  </Grid>
                ))}
            </Grid>
            <Divider variant="inset" component="li" />
          </List>
        </Card>
      </Container>
    </main>
  );
}

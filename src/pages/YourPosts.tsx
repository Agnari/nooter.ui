import '../animation.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const title = ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5']


export function YourPosts() {
    return (
        <Container maxWidth="md" sx={{background:"url(https://www.tilingtextures.com/wp-content/uploads/2018/11/0068-1-512x512.jpg)", border: 5, borderColor: "black", transform:"translate(0px, 30px)", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", borderStyle: "dashed", paddingBottom:15, filter:"drop-shadow(7px 7px 7px black)"}}>
            
            <h2 className="hover1" style={{fontFamily: "Cabin Sketch", fontSize: 50, height:44, width:300}}> <DoneOutlineIcon sx={{color:"black", transform:"rotate(3deg)"}}/>Your Posts <img src={require("../wtf.png")} alt="lol no" style={{height:"30px", width:"30px", transform:"rotate(3deg)"}}/></h2>
            <Grid container spacing={4} sx={{transform:"translate(20px)"}}>
                {title.map((title) => (
                    <Grid item key={title} xs={12} sm={12} md={12}>
                        <CheckCircleOutlineIcon sx={{transform:"translate(-28px, 20px)", color:"darkred", filter:"drop-shadow(1px 1px 1px black)"}}/>
                        <Card sx={{ height: '87%', width: '95%', display: 'flex', background:"transparent", flexDirection: 'column', borderBottom: (theme) => `5px solid ${theme.palette.divider}`, borderColor: "#41424C", borderStyle:"solid", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px" }}>
                            <Stack direction="row">
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <p className="hover1" style={{fontFamily: "Cabin Sketch", fontSize: 35, color: "#181818", width: 100 }}>
                                        {title}
                                    </p>
                                    
                                </CardContent>
                                <CardActions>
                                    <Link className="hover-2" href="/editpost" underline="none" style={{ fontFamily: "Cabin Sketch", fontSize:20, color: "black", backgroundColor: "transparent", padding:"20px 20px 20px"}}> Edit</Link>
                                </CardActions>
                            </Stack>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
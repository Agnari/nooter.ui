import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export function EditPost() {
    return (
        <Container style={{background: "url(https://www.tilingtextures.com/wp-content/uploads/2018/11/0068-1-512x512.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} sx={{width:"87%", border:5, transform:"translate(0px, 90px)", borderTopLeftRadius: "255px 15px", borderTopRightRadius: "15px 225px", borderBottomRightRadius: "225px 15px", borderBottomLeftRadius: "15px 255px", borderStyle: "dashed", filter:"drop-shadow(5px 5px 5px black)"}}>
         <img src={require("../fuqno.png")} style={{height:'100px', width:'100px', filter:"drop-shadow(3px 3px 3px black)", transform:"translate(-60px, -35px) rotate(45deg)"}}/> <img src={require("../anber.png")} style={{height:100, width:100, filter:"drop-shadow(-3px 3px -3px black)", transform:"translate(900px, -45px) rotate(-10deg)"}}/>
        <Container maxWidth="md" sx={{ transform:"translate(0px, -100px)", marginBottom:-10}}>
            <h2 style={{fontFamily: "Calligraffitti, cursive", fontSize: 30 }}>Edit Post</h2>

            <TextField sx={{background:"url(https://img.freepik.com/free-photo/white-crumpled-paper-texture-background-design-space-white-tone_1258-78696.jpg?w=1800&t=st=1668364849~exp=1668365449~hmac=4f3352146117b55bd624ed922e88d5913590fe62d3eeaa38fbae504457d6644b)", transform:"rotate(-1deg)"}}
                margin="normal"
                variant="standard"
                required
                fullWidth
                placeholder="Change Post Title..."
                inputProps={{style:{fontFamily: "Righteous"}}}
                InputLabelProps={{style:{fontFamily: "Righteous"}}}

            />
            <TextField sx={{background:"url(https://img.freepik.com/free-photo/white-crumpled-paper-texture-background-design-space-white-tone_1258-78696.jpg?w=1800&t=st=1668364849~exp=1668365449~hmac=4f3352146117b55bd624ed922e88d5913590fe62d3eeaa38fbae504457d6644b)", transform:"rotate(-2deg)"}}
                placeholder="Edit Post..."
                multiline
                fullWidth
                rows={12}
                inputProps={{style:{fontFamily: "Righteous"}}}
                InputLabelProps={{style:{fontFamily: "Righteous"}}}
            />
            <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, fontFamily: "Calligraffitti", backgroundColor: "#59260B", borderRadius: "50%" }}
                    >
                        Submit Changes
                    </Button>
                </Grid>
            </Grid>
        </Container>
        </Container>
    )
}
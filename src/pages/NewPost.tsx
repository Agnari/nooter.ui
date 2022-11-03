import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export function NewPost() {
    return (
        <Container style={{background: "linear-gradient(to left, #A97637, #737373)", borderRadius: 40}}>
        <Container style={{background: "linear-gradient(45deg, white, #a8a7a7", borderRadius: 20}}>
        
        <Container maxWidth="md">

            <h2 style={{fontFamily: "Righteous", paddingTop: 20, fontSize: 30 }}>Add post</h2>

            <TextField
                margin="normal"
                variant="standard"
                required
                fullWidth
                placeholder="Post Title"
                inputProps={{style:{fontFamily: "Righteous"}}}
                InputLabelProps={{style:{fontFamily: "Righteous"}}}

            />
            <TextField
                placeholder="Your text"
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
                        sx={{ mt: 3, mb: 2, fontFamily: "Righteous", backgroundColor: "#A97637", borderRadius: 3 }}
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
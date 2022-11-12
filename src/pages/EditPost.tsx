import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export function EditPost() {
    return (
        <Container style={{background: "linear-gradient(to left, #A97637, #60759c)", borderRadius: 40}} sx={{width: '83%'}}>
        <Container style={{background: "linear-gradient(45deg, white, #a8a7a7", borderRadius: 20}}>
        
        <Container maxWidth="md">
            <h2 style={{fontFamily: "Cabin Sketch", paddingTop: 15, fontSize: 30 }}>Edit Post</h2>

            <TextField
                margin="normal"
                variant="standard"
                required
                fullWidth
                placeholder="Change Post Title..."
                inputProps={{style:{fontFamily: "Cabin Sketch"}}}
                InputLabelProps={{style:{fontFamily: "Cabin Sketch"}}}

            />
            <TextField
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
                        sx={{ mt: 3, mb: 2, backgroundColor: "#A97637", borderRadius: 10, fontFamily: "Righteous" }}
                    >
                        Submit Changes
                    </Button>
                </Grid>
            </Grid>
        </Container>
        </Container>
        </Container>
    )
}
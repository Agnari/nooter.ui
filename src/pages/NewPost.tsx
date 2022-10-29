import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export function NewPost() {
    return (
        <Container maxWidth="md">

            <TextField
                margin="normal"
                variant="standard"
                required
                fullWidth
                placeholder="Post Title"

            />
            <TextField
                placeholder="Your text"
                multiline
                fullWidth
                rows={12}
            />
            <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
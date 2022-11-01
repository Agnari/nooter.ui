import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export function EditPost() {
    return (
        <Container maxWidth="md">
            <h2>Edit Post</h2>

            <TextField
                margin="normal"
                variant="standard"
                required
                fullWidth
                placeholder="Change Post Title"

            />
            <TextField
                placeholder="Edit Post..."
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
                        Submit Changes
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
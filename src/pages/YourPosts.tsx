import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const title = ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5']


export function YourPosts() {
    return (
        <Container maxWidth="md">
            <h2>Your Posts</h2>
            <Grid container spacing={4}>
                {title.map((title) => (
                    <Grid item key={title} xs={12} sm={12} md={12}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <Stack direction="row">
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <p>
                                        {title}
                                    </p>
                                </CardContent>
                                <CardActions>
                                    <Button href="/editpost" size="small">Edit</Button>
                                </CardActions>
                            </Stack>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
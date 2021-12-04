import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Card, CardMedia } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const MainBar = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Typography variant="h4" sx={{ lineHeight: 1.3 }} gutterBottom>
                    Fiszki to skuteczna nauka,
                    która nie zajmie Ci czasu.
                </Typography>
                <Typography variant="subtitle1">
                    15 minut fiszek przez 7 dni i zobaczysz efekty:
                </Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CheckIcon />
                        </ListItemIcon>
                        <ListItemText primary="uczysz się swoim własnym tempem" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CheckIcon />
                        </ListItemIcon>
                        <ListItemText primary="podtrzymasz motywację do nauki" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CheckIcon />
                        </ListItemIcon>
                        <ListItemText primary="znajdziesz pracę, zdasz egzaminy" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardMedia
                        component="img"
                        image="https://i.ytimg.com/vi/q2pytPcwIhc/maxresdefault.jpg"
                        alt="flashcards-image"
                    />
                </Card>
            </Grid>
        </Grid>
    )
}

export default MainBar;
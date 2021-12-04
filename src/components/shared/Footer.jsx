import { Typography, Link } from "@mui/material"

function Copyright() {
    return (
        <Typography sx={{ display: 'flex', background: '#ddd', justifyContent: 'center' }} variant="caption" component="div" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Fiszkoteka
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Copyright />
    );
}
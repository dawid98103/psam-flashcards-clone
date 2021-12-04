import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SetMealIcon from '@mui/icons-material/SetMeal';
import { Link } from 'react-router-dom';
import { styled } from "@mui/system";

const StyledLink = styled(Link)({
    color: 'white',
    textDecoration: 'none'
})

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <SetMealIcon fontSize='large' />
                        Fiszkoteka
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Strona główna</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <StyledLink to='/flashcards/create'>
                                    <Typography textAlign="center">Stwórz fiszki</Typography>
                                </StyledLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <StyledLink to='/flashcards/list'>
                                    <Typography textAlign="center">Fiszki</Typography>
                                </StyledLink>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <SetMealIcon fontSize='large' />
                        Fiszkoteka
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={(handleCloseNavMenu)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <StyledLink to='/'>
                                Strona główna
                            </StyledLink>
                        </Button>
                        <Button
                            onClick={(handleCloseNavMenu)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <StyledLink to='/flashcards/create'>
                                Stwórz fiszki
                            </StyledLink>
                        </Button>
                        <Button
                            onClick={(handleCloseNavMenu)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <StyledLink to='/flashcards/list'>
                                Fiszki
                            </StyledLink>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;
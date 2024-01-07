import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { TbWorldQuestion } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const navlinks = [
    {
        route: 'Home',
        path: '/'
    },
    {
        route: 'Questions',
        path: 'questions'
    },
    {
        route: 'Profile',
        path: 'profile'
    },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#161c23',
            }}
        >
            <Container maxWidth="xl" className='py-3'>
                <Toolbar disableGutters>
                    {/* Desktop Logo section */}
                    <Box sx={{display: { xs: 'none', md: 'flex' }}}>
                        <div className='flex items-center gap-1 '>
                            <div className='bg-[#f48225] w-[50px] h-[50px] rounded-xl flex justify-center items-center'>
                                <TbWorldQuestion className=' text-[40px]' />
                            </div>
                            <div>
                                <h1 className='font-bold text-[34px]'>Quniverse</h1>
                            </div>
                        </div>
                    </Box>


                    {/* Desktop navlinks */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {
                            navlinks.map(navlink => (
                                <NavLink key={navlink} to={navlink.path} className='mx-5'>
                                    {navlink.route}
                                </NavLink>
                            ))
                        }
                    </Box>

                    {/* Small device logo section */}
                    <Box className='flex lg:hidden' sx={{ flexGrow: 1 }}>
                        <div className='flex items-center gap-1 flex-grow'>
                            <div className='bg-[#f48225] w-[40px] h-[40px] rounded-xl flex justify-center items-center'>
                                <TbWorldQuestion className=' text-[30px]' />
                            </div>
                            <div>
                                <h1 className='font-bold text-[28px]'>Quniverse</h1>
                            </div>
                        </div>
                    </Box>

                    {/* profile dropdown */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Hamburger */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                            {
                                navlinks.map(navlink => (
                                    <div key={navlink}>
                                        <NavLink to={navlink.path} className='mx-5'>
                                            {navlink.route}
                                        </NavLink>
                                    </div>
                                ))
                            }
                        </Menu>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
import React, { useState } from 'react'
import { Shake } from 'reshake';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import MenuIcon from '@mui/icons-material/Menu';
import DropdownMenu from './DropdownMenu'
import logo from '../assets/logo.jpeg'
import suzukilogo from '../assets/suzuki-logo.jpeg'
import { CssBaseline, Container, Box, Typography, Link, Button } from '@mui/material';
function Navbar() {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px 0",
                    backgroundColor: "primary.main",
                    color: "#fff",
                    transition: "0.5s",
                    '&:hover': {
                        color: 'black'
                    },
                }}
            >
                <Typography variant="subtitle2" sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" }, gap: "10px", fontSize: "0.8rem" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <LocationOnRoundedIcon /> Arifbey, Hendese Otomotiv, Adnan Menderes Caddesi No:33A, 54580 Arifiye/SAKARYA &emsp; &emsp;
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <PhoneInTalkRoundedIcon /> +90 530 360 41 05
                    </Box>
                </Typography>
            </Box>
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Container
                    maxWidth="lg"
                    sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "20px 0", bgcolor: "secondary.main", borderBottom: "2px solid #ddd" }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <img
                            src={`${logo}?w=150&h=150&fit=crop&auto=format`}
                            srcSet={`${logo}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                            alt={logo}
                            loading="lazy"
                            style={{ width: "200px", height: "110px" }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Button onClick={handleMenu} sx={{ marginY: "10px", display: { xs: "flex", sm: "flex", md: "none", lg: "none" }, alignItems: "center", color: "primary.main" }}><MenuIcon sx={{ width: "40px", height: "40px" }} /></Button>
                        <Box
                            sx={{ transition: "1s", listStyle: "none", textDecoration: "none", fontSize: "1rem", fontWeight: "bold", display: { xs: menu ? "flex" : "none", sm: menu ? "flex" : "none", md: "flex", lg: "flex" }, flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, alignItems: "center", gap: "20px" }}
                        >
                            <li>
                                <Link href="/" sx={{
                                    paddingBottom: "10px",
                                    paddingX: "2px",
                                    textDecoration: "none",
                                    color: "black",
                                    borderBottom: "0 solid #ed3137",
                                    transition: "border .2s ease-in-out",
                                    '&:hover': {
                                        color: "primary.main",
                                        borderWidth: "4px"
                                    }
                                }}>
                                    Anasayfa
                                </Link>
                            </li>
                            <li>
                                <DropdownMenu />
                            </li>
                            <li>
                                <Link href="#" sx={{
                                    paddingBottom: "10px",
                                    paddingX: "2px",
                                    textDecoration: "none",
                                    color: "black",
                                    borderBottom: "0 solid #ed3137",
                                    transition: "border .2s ease-in-out",
                                    '&:hover': {
                                        color: "primary.main",
                                        borderWidth: "4px"
                                    }
                                }}>
                                    Teknik Bilgiler
                                </Link>
                            </li>
                            <li>
                                <Link href="#" sx={{
                                    paddingBottom: "10px",
                                    paddingX: "2px",
                                    textDecoration: "none",
                                    color: "black",
                                    borderBottom: "0 solid #ed3137",
                                    transition: "border .2s ease-in-out",
                                    '&:hover': {
                                        color: "primary.main",
                                        borderWidth: "4px"
                                    }
                                }}>
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" sx={{
                                    paddingBottom: "10px",
                                    paddingX: "2px",
                                    textDecoration: "none",
                                    color: "black",
                                    borderBottom: "0 solid #ed3137",
                                    transition: "border .2s ease-in-out",
                                    '&:hover': {
                                        color: "primary.main",
                                        borderWidth: "4px"
                                    }
                                }}>
                                    İletişim
                                </Link>
                            </li>
                            <Shake h={3} v={0} r={3}>
                                <a style={{ textDecoration: "none" }} href="tel:05532654734">
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1.3rem" },
                                            color: "primary.main",
                                            gap: "10px",
                                            transition: "0.5s",
                                            padding: "15px 10px",
                                            borderRadius: "5px 5px 0 0",
                                            borderBottom: "2px solid #ed3137",
                                            '&:hover': {
                                                backgroundColor: "primary.main",
                                                color: "secondary.main",
                                                cursor: "pointer"
                                            }
                                        }}
                                    >
                                        <PhoneInTalkRoundedIcon />
                                        +90 530 360 41 05
                                    </Box>
                                </a>
                            </Shake>
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" }, alignItems: "center" }}>
                        <img
                            src={`${suzukilogo}?w=150&h=150&fit=crop&auto=format`}
                            srcSet={`${suzukilogo}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                            alt={logo}
                            loading="lazy"
                            style={{ width: "100px", height: "115px" }}
                        />
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default Navbar
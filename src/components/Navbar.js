import React from 'react'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import logo from '../assets/logo.jpeg'
import suzukilogo from '../assets/suzuki-logo.jpeg'
import { CssBaseline, Container, Box, Typography, Link } from '@mui/material';
function Navbar() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "15px 0",
                    backgroundColor: "primary.main",
                    color: "#fff",
                    transition: "0.5s",
                    '&:hover': {
                        color: 'black'
                    },
                }}
            >
                <Typography variant="subtitle2" sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <LocationOnRoundedIcon /> Arifbey, Hendese Otomotiv, Adnan Menderes Caddesi No:39/1, 54580 Arifiye/SAKARYA &emsp; &emsp;
                    <PhoneInTalkRoundedIcon /> +90 553 265 47 34
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
                            style={{ width: "240px", height: "140px" }}
                        />
                        <img
                            src={`${suzukilogo}?w=150&h=150&fit=crop&auto=format`}
                            srcSet={`${suzukilogo}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                            alt={logo}
                            loading="lazy"
                            style={{ width: "110px", height: "125px" }}
                        />
                    </Box>
                    <Box>
                        <ul
                            style={{ transition: "1s", listStyle: "none", textDecoration: "none", fontSize: "1.1rem", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "25px" }}
                        >
                            <li>
                                <Link href="#" sx={{
                                    textDecoration: "none",
                                    color: "black",
                                    transition: "0.1s",
                                    '&:hover': {
                                        color: "primary.main",
                                        borderBottom: "2px solid #ed3137",
                                    }
                                }}
                                >
                                    Yedek Parçalar
                                </Link>
                            </li>
                            <li>
                                <Link href="#" sx={{
                                    textDecoration: "none",
                                    color: "black",
                                    transition: "0.1s",
                                    '&:hover': {
                                        color: "primary.main",
                                        borderBottom: "2px solid #ed3137",
                                    }
                                }}>
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link href="#" sx={{
                                    textDecoration: "none",
                                    color: "black",
                                    transition: "0.1s",
                                    '&:hover': {
                                        color: "primary.main",
                                        borderBottom: "2px solid #ed3137",
                                    }
                                }}>
                                    İletişim
                                </Link>
                            </li>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "10px",
                                    transition: "0.5s",
                                    borderRadius: "5px",
                                    padding: "15px 10px",
                                    '&:hover': {
                                        backgroundColor: "primary.main",
                                        color: "secondary.main"
                                    }
                                }}
                            >
                                <Box sx={{
                                    transition: "transform 0.2s linear",
                                    '&:hover': {
                                        transform: "rotate(45deg)"
                                    }
                                }}>
                                    <Box sx={{
                                        transition: "transform 0.3s linear",
                                        '&:hover': {
                                            transform: "rotate(-45deg)"
                                        }
                                    }}>
                                        <PhoneInTalkRoundedIcon />
                                    </Box>
                                </Box>
                                0553 265 47 34
                            </Box>
                        </ul>
                    </Box>
                </Container>
            </Box>

        </React.Fragment>
    )
}

export default Navbar
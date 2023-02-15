import React from 'react'
import { Shake } from 'reshake';
import HamburgerMenu from './HamburgerMenu';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import DropdownMenu from './DropdownMenu'
import logo from '../assets/logo.jpeg'
import suzukilogo from '../assets/suzuki-logo.jpeg'
import { CssBaseline, Container, Box, Typography, Link } from '@mui/material';
function Navbar() {
    return (
        <React.Fragment id="outer-container">
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
                <Typography variant="subtitle2" sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, gap: { xs: "5px", sm: "5px", md: "30px", lg: "40px" }, fontSize: { xs: "0.6rem", sm: "0.6rem", md: "0.6rem", lg: "0.7rem" } }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <LocationOnRoundedIcon />Arifbey, Adnan Menderes Caddesi No:33A, 54580 Arifiye/SAKARYA
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <PhoneInTalkRoundedIcon />+90 530 360 41 05
                    </Box>
                </Typography>
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}>
                <HamburgerMenu pageWrapId="page-wrap" outerContainerId="outer-container" />
            </Box>
            <Box sx={{ bgcolor: "secondary.main" }} id="page-wrap">
                <Container
                    maxWidth="lg"
                    sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "20px 5px", bgcolor: "secondary.main", borderBottom: "2px solid #ddd" }}
                >

                    <Box sx={{ margin: { xs: "auto", sm: "auto", md: "0", lg: "0" }, display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", width: { xs: "130px", sm: "130px", md: "130px", lg: "180px" }, height: { xs: "80px", sm: "80px", md: "80px", lg: "100px" } }}>
                        <Link href="/">
                            <img
                                src={`${logo}?w=150&h=150&fit=crop&auto=format`}
                                srcSet={`${logo}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                                alt={logo}
                                loading="lazy"
                                style={{ width: "100%" }}
                            />
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box
                            sx={{ transition: "1s", listStyle: "none", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", display: { xs: "none", sm: "none", md: "flex", lg: "flex" }, flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, alignItems: "center", gap: "20px" }}
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
                                <a style={{ textDecoration: "none" }} href="tel:05303604105">
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
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
                    <Box sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" }, alignItems: "center", width: { xs: "80px", sm: "80px", md: "80px", lg: "100px" }, height: { xs: "95px", sm: "95px", md: "95px", lg: "115px" } }}>
                        <img
                            src={`${suzukilogo}?w=150&h=150&fit=crop&auto=format`}
                            srcSet={`${suzukilogo}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                            alt={logo}
                            loading="lazy"
                            style={{ width: "100%" }}
                        />
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default Navbar
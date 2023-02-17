import React from 'react'
import { Shake } from 'reshake';
import HamburgerMenu from './HamburgerMenu';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import DropdownMenu from './DropdownMenu'
import logo from '../assets/logo.jpeg'
import suzukilogo from '../assets/suzuki-logo.jpeg'
import { CssBaseline, Container, Box, Typography, Link } from '@mui/material';
import SearchAppBar from '../components/SearchBar';
function Navbar() {
    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];
    return (
        <React.Fragment>
            <CssBaseline />
            {/* <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px 0",
                    backgroundColor: "#ddd",
                    color: "primary.main",
                    transition: "0.5s",
                    '&:hover': {
                        color: 'black'
                    },
                }}
            >
                <Typography variant="subtitle2" sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, gap: { xs: "5px", sm: "5px", md: "30px", lg: "40px" }, fontSize: { xs: "0.6rem", sm: "0.6rem", md: "0.7rem", lg: "0.8rem" } }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <LocationOnRoundedIcon />Arifbey, Adnan Menderes Caddesi No:33A, 54580 Arifiye/SAKARYA
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <PhoneInTalkRoundedIcon />+90 530 360 41 05
                    </Box>
                </Typography>
            </Box> */}
            <Box sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}>
                <HamburgerMenu pageWrapId="page-wrap" outerContainerId="outer-container" />
            </Box>
            <Box sx={{ bgcolor: "secondary.main" }} id="page-wrap">
                <Container
                    maxWidth="lg"
                    sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "0 5px 20px 5px", bgcolor: "secondary.main", }}
                >
                    <Box sx={{ margin: { xs: "20px auto", sm: "20px auto", md: "0", lg: "0" }, display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", width: { xs: "140px", sm: "140px", md: "150px", lg: "170px" }, height: { xs: "90px", sm: "90px", md: "95px", lg: "100px" } }}>
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
                    <Box sx={{
                        margin: 0, padding: 0,
                        width: "0", height: "0", display: { xs: "none", sm: "none", md: "inline-block", lg: "inline-block" },
                        borderBottom: "117px solid #f7f7f7",
                        borderRight: "60px solid #ddd"
                    }}></Box>
                    <Box sx={{ width: "80%", height: "117px", backgroundColor: "#ddd", display: { xs: "none", sm: "none", md: "flex", lg: "flex" }, alignItems: "center", justifyContent: "center" }}>
                        {/* <Box sx={{ margin: "auto", width: "40%", backgroundColor: "#f7f7f7", padding: 0, }}>
                            <Box sx={{
                                margin: 0, padding: 0,
                                width: "0", height: "0", display: "inline-block",
                                borderBottom: "42px solid #ed3137",
                                borderRight: "16px solid #f7f7f7"
                            }}>
                            </Box>
                            <input />
                        </Box>
                        <Box sx={{ margin: "auto", }}>
                            <Shake h={3} v={0} r={3}>
                                <a style={{ textDecoration: "none" }} href="tel:05303604105">
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: "secondary.main",
                                            color: "black",
                                            fontWeight: "bolder",
                                            gap: "10px",
                                            transition: "0.5s",
                                            padding: "15px 10px",
                                            borderBottom: "2px solid #f7f7f7",
                                            '&:hover': {
                                                backgroundColor: "secondary.main",
                                                color: "primary.main",
                                                cursor: "pointer"
                                            }
                                        }}
                                    >
                                        <PhoneInTalkRoundedIcon />
                                        +90 530 360 41 05
                                    </Box>
                                </a>
                            </Shake>
                        </Box> */}
                        <Box
                            sx={{ transition: "1s", listStyle: "none", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", display: { xs: "none", sm: "none", md: "flex", lg: "flex" }, flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, alignItems: "center", justifyContent: "center", gap: "40px", padding: "15px 0 15px 0" }}
                        >
                            <li style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <Link href="/" sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    paddingBottom: "10px",
                                    paddingX: "2px",
                                    textDecoration: "none",
                                    color: "black",
                                    backgroundImage: "linear-gradient(#ed3137 0 0)",
                                    backgroundPosition: "right -100% bottom 0",
                                    backgroundSize: "200% 2px",
                                    backgroundRepeat: "no-repeat",
                                    '&:hover': {
                                        color: "primary.main",
                                        backgroundPosition: "left -100% bottom 0",
                                        transition: "background-position 1s"
                                    }
                                }}>
                                    <HomeIcon />
                                    Anasayfa
                                </Link>
                            </li>
                            <li>
                                <DropdownMenu />
                            </li>
                            <li>
                                <Link href="#" sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    paddingBottom: "10px",
                                    paddingX: "2px",
                                    textDecoration: "none",
                                    color: "black",
                                    backgroundImage: "linear-gradient(#ed3137 0 0)",
                                    backgroundPosition: "right -100% bottom 0",
                                    backgroundSize: "200% 2px",
                                    backgroundRepeat: "no-repeat",
                                    '&:hover': {
                                        color: "primary.main",
                                        backgroundPosition: "left -100% bottom 0",
                                        transition: "background-position 1s"
                                    }
                                }}>
                                    Teknik Bilgiler
                                </Link>
                            </li>
                            <li>
                                <Link href="#" sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    paddingBottom: "10px",
                                    paddingX: "2px",
                                    textDecoration: "none",
                                    color: "black",
                                    backgroundImage: "linear-gradient(#ed3137 0 0)",
                                    backgroundPosition: "right -100% bottom 0",
                                    backgroundSize: "200% 2px",
                                    backgroundRepeat: "no-repeat",
                                    '&:hover': {
                                        color: "primary.main",
                                        backgroundPosition: "left -100% bottom 0",
                                        transition: "background-position 1s"
                                    }
                                }}>
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link href="/iletisim" sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    paddingBottom: "10px",
                                    paddingX: "2px",
                                    textDecoration: "none",
                                    color: "black",
                                    backgroundImage: "linear-gradient(#ed3137 0 0)",
                                    backgroundPosition: "right -100% bottom 0",
                                    backgroundSize: "200% 2px",
                                    backgroundRepeat: "no-repeat",
                                    '&:hover': {
                                        color: "primary.main",
                                        backgroundPosition: "left -100% bottom 0",
                                        transition: "background-position 1s"
                                    }
                                }}>
                                    İletişim
                                </Link>
                            </li>
                            {/* <Shake h={3} v={0} r={3}>
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
                            </Shake> */}
                        </Box>
                    </Box>

                    <Box sx={{
                        margin: 0, padding: 0,
                        width: "0", height: "0", display: { xs: "none", sm: "none", md: "inline-block", lg: "inline-block" },
                        borderTop: "117px solid #ddd",
                        borderRight: "60px solid #f7f7f7"
                    }}></Box>
                    <Box sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" }, alignItems: "center", width: { xs: "80px", sm: "80px", md: "80px", lg: "100px" }, height: { xs: "90px", sm: "90x", md: "95px", lg: "115px" } }}>
                        <img
                            src={`${suzukilogo}?w=150&h=150&fit=crop&auto=format`}
                            srcSet={`${suzukilogo}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                            alt={logo}
                            loading="lazy"
                            style={{ width: "100%" }}
                        />
                    </Box>
                </Container>
                {/* <Container maxWidth="lg"
                    sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", bgcolor: "secondary.main", borderBottom: "2px solid #ddd" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "0px" }}>
                        <Box
                            sx={{ transition: "1s", listStyle: "none", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", display: { xs: "none", sm: "none", md: "flex", lg: "flex" }, flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, alignItems: "center", gap: "20px", padding: "15px 0 15px 0" }}
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
                            {/* <Shake h={3} v={0} r={3}>
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
                </Container> */}
            </Box >
        </React.Fragment >
    )
}

export default Navbar
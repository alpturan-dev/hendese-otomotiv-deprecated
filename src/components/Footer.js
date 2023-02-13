import React from 'react'
import logo from '../assets/logo.jpeg'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, Icon, Typography } from '@mui/material'
function Footer() {
    return (
        <>
            <Box sx={{ bgcolor: "secondary.main", borderTop: "2px solid #ddd" }}>
                <Container sx={{ paddingY: "30px", display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, alignItems: "center", gap: "30px", justifyContent: "space-between" }}>
                    <Box sx={{ width: "100%" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                            <img
                                src={`${logo}?w=150&h=150&fit=crop&auto=format`}
                                srcSet={`${logo}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                                alt={logo}
                                loading="lazy"
                                style={{ width: "160px", height: "80px" }}
                            />
                            <Typography variant="subtitle1" sx={{ fontWeight: "bolder", fontStyle: "italic", fontFamily: "montserrat" }}>
                                Suzuki Yedek Parça
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" }, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "6px", color: "#3B579D" }}>
                            <FacebookIcon />
                            <a style={{ textDecoration: "none", color: "inherit" }} href="https://www.facebook.com/hendeseoto/">
                                <Typography sx={{ '&:hover': { color: "#3B579D" } }}>
                                    Facebook
                                </Typography>
                            </a>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "6px", color: "#0B65C2" }}>
                            <LinkedInIcon />
                            <a style={{ textDecoration: "none", color: "inherit" }} href="https://www.linkedin.com/in/muammer-%C5%9Fen-b55bb9107/?originalSubdomain=tr">
                                <Typography sx={{ '&:hover': { color: "#0B65C2" } }}>
                                    LinkedIn
                                </Typography>
                            </a>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <img style={{ width: "20px", height: "20px", color: "#F6E106" }} src="https://s0.shbdn.com/assets/images/sahibinden-logo:62af0108bd5214afd5c4e1595fc17339.png" />
                            <a style={{ textDecoration: "none", color: "inherit" }} href="https://hendeseoto.sahibinden.com/">
                                <Typography >
                                    Sahibinden
                                </Typography>
                            </a>
                        </Box>
                    </Box>
                </Container>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "15px" }}>
                    <Typography variant="subtitle1">
                        Hendese Otomotiv © 2023 | Made by <a href="https://www.linkedin.com/in/abdurrahman-alpturan-798b94202/">alpturan-dev</a>
                    </Typography>
                </Box>
            </Box>

        </>
    )
}

export default Footer
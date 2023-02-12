import React from 'react'
import logo from '../assets/logo.jpeg'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, Icon, Typography } from '@mui/material'
function Footer() {
    return (
        <>
            <Box sx={{ bgcolor: "secondary.main", borderTop: "3px solid #ddd" }}>
                <Container sx={{ paddingY: "50px", display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, alignItems: "center" }}>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "40%", lg: "40%" } }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                            <img
                                src={`${logo}?w=150&h=150&fit=crop&auto=format`}
                                srcSet={`${logo}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                                alt={logo}
                                loading="lazy"
                                style={{ width: "200px", height: "110px" }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: "bolder", fontStyle: "italic", fontFamily: "montserrat" }}>Suzuki Yedek Parça</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" }, display: "flex", flexDirection: "column", alignItems: "end", gap: "15px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "6px", color: "#3B579D" }}>
                            <FacebookIcon />
                            <Typography sx={{ '&:hover': { color: "#3B579D" } }}>Facebook</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "6px", color: "#0B65C2" }}>
                            <LinkedInIcon />
                            <a style={{ textDecoration: "none", color: "inherit" }} href="https://www.linkedin.com/in/muammer-%C5%9Fen-b55bb9107/?originalSubdomain=tr"><Typography sx={{ '&:hover': { color: "#0B65C2" } }}> LinkedIn</Typography> </a>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <img style={{ width: "20px", height: "20px", color: "#F6E106" }} src="https://www.svgrepo.com/show/306691/sahibinden.svg" />
                            <Typography sx={{ color: "#F6E106" }}>Sahibinden</Typography>
                        </Box>
                    </Box>
                </Container>
                <Box sx={{ display: "flex", marginX: "auto", alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="body1" >Made by alpturan-dev</Typography>
                </Box>

            </Box>

        </>
    )
}

export default Footer
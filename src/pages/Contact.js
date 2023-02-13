import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box, Container, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Contact() {

    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Container sx={{ paddingY: "50px", height: "100%", width: "100%", display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: "40%" }}>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }} variant="h6">
                            <LocationOnIcon sx={{ color: "primary.main" }} />
                            Konum
                        </Typography>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12096.472197119363!2d30.3565584!3d40.7154177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb1220ad01335%3A0xab9ab46c1065c7b3!2sHendese%20Otomotiv!5e0!3m2!1sen!2str!4v1676298897133!5m2!1sen!2str" style={{ height: "450px", width: "100%", border: "1px solid #ddd" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                    <Box sx={{ width: "40%" }}>
                        Contact
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Contact
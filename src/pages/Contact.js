import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box, Container } from '@mui/material'
function Contact() {
    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Container sx={{ paddingY: "50px", height: "100%" }}>
                    <Box>Icerik </Box>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Contact
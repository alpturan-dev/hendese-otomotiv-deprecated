import { Container, Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'

function Dashboard() {
    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Container maxWidth="lg" >
                    Dashboard
                </Container>
            </Box>
        </>
    )
}

export default Dashboard
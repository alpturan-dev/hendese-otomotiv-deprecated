import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box, Container, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactsIcon from '@mui/icons-material/Contacts';
function Contact() {

    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Container disableGutters sx={{ paddingY: "50px", paddingX: { xs: "5px", sm: "10px", md: "0px", lg: "0px" }, height: "100%", width: "100%", display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "column", md: "row" }, gap: "40px" }}>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12096.472197119363!2d30.3565584!3d40.7154177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb1220ad01335%3A0xab9ab46c1065c7b3!2sHendese%20Otomotiv!5e0!3m2!1sen!2str!4v1676298897133!5m2!1sen!2str" style={{ height: "447px", width: "100%", border: "1px solid #ddd", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                    <Box sx={{ background: "#eee", width: { xs: "100%", sm: "100%", md: "50%" }, height: "447px", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", paddingLeft: "20px", gap: "20px", border: "1px solid #ddd", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }} variant="subtitle1">
                            <LocationOnRoundedIcon sx={{ color: "primary.main" }} />
                            Adres: <a href="https://www.google.com/maps/place/Hendese+Otomotiv/@40.7154177,30.3565584,15z/data=!4m6!3m5!1s0x14ccb1220ad01335:0xab9ab46c1065c7b3!8m2!3d40.7154177!4d30.3565584!16s%2Fg%2F11rjrwvg33?sa=X&ved=2ahUKEwj7vuuGn5P9AhVEOHoKHUVPD7MQ_BJ6BAhSEAg&coh=164777&entry=tt" style={{ color: "#3F3F95" }}>
                                Arifbey, Adnan Menderes Caddesi No:33A, 54580 Arifiye/SAKARYA
                            </a>
                        </Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }} variant="subtitle1">
                            <LocalPhoneIcon sx={{ color: "#1B1B1B" }} />
                            Telefon: <a href="tel:05303604105" style={{ color: "#3F3F95" }}>+90 530 360 41 05</a>
                        </Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }} variant="subtitle1">
                            <EmailIcon sx={{ color: "#1E60EF" }} />
                            E-mail: <a href="mailto:hendeseoto@gmail.com" style={{ color: "#3F3F95" }}>hendeseoto@gmail.com</a>
                        </Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px", }} variant="subtitle1">
                            <FacebookIcon sx={{ color: "#3B579D" }} />
                            Facebook: <a href="https://www.facebook.com/hendeseoto/" style={{ color: "#3F3F95" }}>
                                www.facebook.com/hendeseoto/
                            </a>
                        </Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }} variant="subtitle1">
                            <img style={{ width: "20px", height: "20px", color: "#F6E106" }} src="https://s0.shbdn.com/assets/images/sahibinden-logo:62af0108bd5214afd5c4e1595fc17339.png" />
                            Sahibinden: <a href="https://hendeseoto.sahibinden.com/" style={{ color: "#3F3F95" }}>hendeseoto.sahibinden.com/</a>
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Contact
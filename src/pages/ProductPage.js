import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Box, Container, Typography } from '@mui/material'
import SellIcon from '@mui/icons-material/Sell';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLocation } from 'react-router-dom';
function ProductPage() {
    const location = useLocation();
    const product = location.state;
    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Container sx={{ paddingTop: "40px", height: "100%" }}>
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" }, alignItems: "center", justifyContent: { xs: "center", sm: "center", md: "space-between", lg: "space-between" }, gap: { xs: "40px", sm: "40px", md: "100px", lg: "100px" } }}>
                        <Box
                            sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
                        >
                            <Zoom>
                                <Box sx={{
                                    width: { xs: "360px", sm: "425px", md: "425px", lg: "455px" },
                                    height: { xs: "360px", sm: "425px", md: "425px", lg: "455px" },
                                }}>
                                    <img src={product.image}
                                        style={{ width: "100%", height: "100%", borderRadius: "5px" }}
                                    />
                                </Box>
                            </Zoom>

                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", width: { xs: "100%", sm: "80%", md: "80%", lg: "80%" }, height: "415px", gap: "20px" }}>
                            <Typography sx={{ fontWeight: "bold", color: "#3D4095" }} variant="h6">SUZUKI</Typography>
                            <Typography sx={{ fontWeight: "bold" }} variant="h3">{product.name}
                                <Typography sx={{ fontWeight: "100" }} variant="body1">{product.model} | {product.category}</Typography>
                            </Typography>
                            <Typography sx={{ fontWeight: "700" }}>OEM: {product.oem}</Typography>

                            <Typography sx={{ fontWeight: "100", lineHeight: '1.5' }} paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque temporibus, et obcaecati dolor quaerat facere sequi ipsa quos delectus odio fugiat ex? Tenetur ad cumque explicabo dicta, error culpa.
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" }, justifyContent: "space-between", alignItems: "center", gap: { xs: "30px", sm: "30px", md: "10px", lg: "10px" } }}>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "20px", sm: "20px", md: "40px", lg: "40px" } }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", borderRadius: "3px" }}>
                                        <Typography sx={{ display: "flex", alignItems: "center", fontWeight: "bold", gap: "10px" }} variant="h4">
                                            <SellIcon sx={{ color: "primary.main" }} />
                                            {product.price}₺
                                        </Typography>
                                    </Box>
                                    <Typography sx={{ display: "flex", alignItems: "center", fontWeight: "800", gap: "10px" }}>
                                        <InventoryIcon sx={{ color: "primary.main" }} />
                                        Stok adedi: {product.stock}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", gap: "20px" }}>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1.3rem" },
                                            color: "secondary.main",
                                            backgroundColor: "primary.main",
                                            gap: "10px",
                                            transition: "0.5s",
                                            padding: "15px 25px",
                                            borderRadius: "5px",
                                            boxShadow: "#ed3137 0px 5px 4px",
                                            '&:hover': {
                                                opacity: "0.9"
                                            }
                                        }}
                                    >
                                        <a href="tel:05532654734" style={{ color: "#f7f7f7", textDecoration: "none" }}>
                                            <Typography sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                <ShoppingBasketIcon />Hemen Ara!
                                            </Typography>
                                            0553 265 47 34
                                        </a>
                                    </Box>
                                    <Box
                                        sx={{
                                            cursor: "pointer",
                                            width: "40%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1.3rem" },
                                            color: "secondary.main",
                                            backgroundColor: "#118C7E",
                                            gap: "10px",
                                            transition: "0.5s",
                                            padding: "15px 25px",
                                            borderRadius: "5px 5px 0 0",
                                            boxShadow: "#118C7E 5px 5px 5px ",
                                            '&:hover': {
                                                opacity: "0.9"
                                            }
                                        }}
                                    >
                                        <a href="https://wa.me/05532654734" style={{ color: "#f7f7f7", textDecoration: "none" }}>
                                            <Typography sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                <WhatsAppIcon /> WhatsApp
                                            </Typography>
                                        </a>
                                    </Box>
                                </Box>
                            </Box>


                        </Box>
                    </Box>
                </Container>
            </Box>

        </>
    )
}

export default ProductPage
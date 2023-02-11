import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Box, Typography, Grid, CardContent, Card } from '@mui/material'
import { Navigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';

function ProductCard({ product }) {
    useEffect(() => {
        setRedirectProductPage(false);
    }, [])
    const [redirectProductPage, setRedirectProductPage] = useState(false);

    const handleProductPage = () => {
        setRedirectProductPage(true);
    }

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const imgStyle = {
        width: "100%",
        height: "280px",
        transition: 'transform .1s ease-in-out',
        transform: isHover ? 'scale(1.1)' : 'none',
    };
    return (
        <>
            <Grid sx={{ cursor: "pointer" }} onClick={() => handleProductPage(product)} item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ minWidth: 280, boxShadow: '1px 2px 9px #ddd' }}>
                    <img
                        style={imgStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        src={product.image}
                        title={product.name}
                        alt={product.name}
                    />
                    <CardContent sx={{ padding: "15px 20px" }}>
                        <Typography variant="body2" color="text.secondary">
                            Marka: Suzuki
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Model: {product.model}
                        </Typography>
                        <Box sx={{ marginTop: "15px", display: "flex", alignItems: "cemter", justifyContent: "space-between" }}>
                            <Typography variant="h4" sx={{ display: "flex", alignItems: "center", }}>
                                <SellIcon sx={{ color: "red" }} />
                                {product.price}₺
                            </Typography>
                            <Typography variant="subtitle" sx={{
                                padding: "10px 12px", borderRadius: "5px", transition: "0.5s", display: "flex", alignItems: "center",
                                background: "red", color: "#fff", gap: "10px",
                                '&:hover': { opacity: "0.9" }
                            }}>
                                <ShoppingCartIcon />
                                İncele
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
                {redirectProductPage && <Navigate to="/product" state={product} replace={true} />}
            </Grid>
        </>
    )
}

export default ProductCard
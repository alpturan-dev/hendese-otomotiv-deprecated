import React from 'react'
import { useState, useEffect } from 'react'
import { Shake } from 'reshake';
import { Box, Typography, Grid, CardContent, Card } from '@mui/material'
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
    const imgStyle = {
        width: "100%",
        height: "200px",
    };
    return (
        <>
            <Grid sx={{ cursor: "pointer", marginBottom: "20px" }} onClick={() => handleProductPage(product)} item xs={12} sm={6} md={4} lg={4}>
                <Card sx={{ display: "flex", flexDirection: "column", width: 240, height: "450px", boxShadow: '1px 2px 9px #ddd', '&:hover': { transform: "scale(1.05)" }, transition: "transform .4s ease-in-out", WebkitTransition: "transform .4s ease-in-out", MozTransition: "transform .4s ease-in-out", OTransition: "transform .4s ease-in-out" }}>
                    <img
                        style={imgStyle}
                        src={product.images[0]}
                        title={product.name}
                        alt={product.name}
                    />
                    <CardContent sx={{ height: "250px", padding: "15px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <Box>
                            <Typography variant="body2" color="text.secondary">
                                Marka: Suzuki
                            </Typography>
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: "bolder" }} component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Model: {product.model}
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: "15px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            <Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <SellIcon sx={{ color: "red" }} />
                                {product.price}₺
                            </Typography>
                            <Shake h={3} v={0} r={3}>
                                <Typography sx={{
                                    marginY: "15px", padding: "10px 10px", fontSize: "0.8rem", borderRadius: "5px", transition: "0.5s", display: "flex", alignItems: "center",
                                    backgroundColor: "#fff", color: "primary.main", gap: "10px",
                                    '&:hover': { backgroundColor: "primary.main", color: "#fff", opacity: "0.9" }
                                }}>
                                    <ShoppingCartIcon />
                                </Typography>
                            </Shake>
                        </Box>
                    </CardContent>
                </Card>
                {redirectProductPage && <Navigate to={`/product/${product.name + product.model}`} state={product} replace={true} />}
            </Grid>
        </>
    )
}

export default ProductCard
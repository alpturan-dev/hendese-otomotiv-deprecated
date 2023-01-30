import { Container, Box, Typography, Grid, CardContent, Card } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import UserContext from '../context/UserContext'
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase'
function Dashboard() {
    const { products, setProducts } = useContext(UserContext);
    const productsRef = collection(db, "products");
    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsRef);
            const displaydata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setProducts(displaydata);
            console.log(displaydata);
        }
        getProducts();
    }, [])
    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Container sx={{ paddingTop: "40px" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {products.length !== 0 ? products.map((product, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Card sx={{ minWidth: 240 }} key={key}>
                                    <img
                                        style={{ width: "100%", height: "240px" }}
                                        src={product.image}
                                        title={product.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )) :
                            "Henuz hicbisi yok"}
                    </Grid>
                </Container>

            </Box>
        </>
    )
}

export default Dashboard
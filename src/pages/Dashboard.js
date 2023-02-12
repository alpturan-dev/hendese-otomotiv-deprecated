import { Container, Box, Typography, Grid, CardContent, Card } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import UserContext from '../context/UserContext';
import SparePartContext from '../context/SparePartContext';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase'
import yedekparca1 from '../assets/yedekparca1.jpeg'
import yedekparca2 from '../assets/yedekparca2.jpeg'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

function Dashboard() {
    const { products, setProducts } = useContext(UserContext);
    const { categories } = useContext(SparePartContext)
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

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Container sx={{ paddingY: "40px" }}>
                    <Box sx={{ paddingBottom: "70px", width: "80%", margin: "auto" }}>
                        <Typography sx={{ fontSize: "2rem", fontWeight: "bolder", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            Hendese Otomotiv Çıkma Yedek Parça
                        </Typography>
                        <AutoplaySlider
                            play={true}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={3000}
                        >
                            <div>
                                <img alt={yedekparca1} src={yedekparca1} style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                    opacity: "0.9"
                                }} />
                            </div>
                            <div>
                                <img alt={yedekparca2} src={yedekparca2} style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                    opacity: "0.9"
                                }} />
                                <Typography sx={{ color: "slategray", fontSize: "1.5rem", fontWeight: "bolder", position: "absolute", top: "90%", left: "25%" }}>Hendese Otomotiv Cıkma Yedek Parca</Typography>
                            </div>
                        </AutoplaySlider>
                    </Box>
                    <Typography variant='h5' sx={{ textDecoration: "underline", textUnderlineOffset: "5px", marginBottom: "20px" }}>Tüm Ürünler</Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {products.map((product, key) => (
                            <ProductCard key={key} product={product} />
                        ))}
                    </Grid>
                    {categories.map((category) => {
                        const filteredProducts = products.filter((product) => (product.category === category));
                        console.log(filteredProducts.length)
                        return (
                            filteredProducts.length > 0 && (
                                <>
                                    <Typography variant='h5' sx={{ textDecoration: "underline", textUnderlineOffset: "8px", marginY: "20px" }}>
                                        {category}
                                    </Typography>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginX: "auto" }}>
                                        {filteredProducts.map((product, key) => (
                                            <ProductCard key={key} product={product} />
                                        ))}
                                    </Grid>
                                </>
                            )
                        )
                    })}
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Dashboard
import { Container, Box, Typography, Grid } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer';
import UserContext from '../context/UserContext';
import SparePartContext from '../context/SparePartContext';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase'
import FloatingWhatsApp from '../layout/FloatingWhatsApp'
// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { toast, Toaster } from 'react-hot-toast';

function Dashboard() {
    const { products, setProducts } = useContext(UserContext);
    const { categories } = useContext(SparePartContext)
    const productsRef = collection(db, "products");

    useEffect(() => {
        const getProducts = async () => {
            toast.loading("");
            const data = await getDocs(productsRef);
            const displaydata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setProducts(displaydata);
        }
        getProducts();
        toast.dismiss();
        console.log(products)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <>
            <Navbar />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Container sx={{ paddingY: "40px" }}>
                    {/* //Slider */}
                    {/* <Box sx={{ paddingBottom: "70px", width: "80%", margin: "auto" }}>
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
                    </Box> */}
                    <h1 style={{ display: "none" }}>Tüm Suzuki Yedek Parçalar</h1>
                    <Typography variant='h5' sx={{ textDecoration: "underline", textUnderlineOffset: "5px", marginBottom: "20px" }}>Tüm Suzuki Yedek Parçalar</Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </Grid>
                    {categories.map((category, index) => {
                        const filteredProducts = products.filter((product) => (product.category === category));
                        return (
                            filteredProducts.length > 0 && (
                                <div key={index}>
                                    <Typography variant='h5' sx={{ textDecoration: "underline", textUnderlineOffset: "8px", marginY: "20px" }}>
                                        {category}
                                    </Typography>
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginX: "auto" }}>
                                        {filteredProducts.map((product, index) => (
                                            <ProductCard key={index} product={product} />
                                        ))}
                                    </Grid>
                                </div>
                            )
                        )
                    })}
                </Container>
            </Box>
            <FloatingWhatsApp />
            <Footer />
        </>
    )
}

export default Dashboard
import React, { useContext, useEffect } from 'react'
import { Container, Box, Typography, Grid } from '@mui/material'
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer';
import UserContext from '../context/UserContext';
import SparePartContext from '../context/SparePartContext';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase'
import FloatingWhatsApp from '../layout/FloatingWhatsApp'
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


    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                {/* <Box sx={{ height: "500px" }}>
                    <Slider />
                </Box> */}
                <Container sx={{ paddingBottom: "40px", paddingTop: "20px" }}>
                    <h1 style={{ display: "none" }}>Tüm Suzuki Yedek Parçalar</h1>
                    <Typography variant='h5' sx={{ textDecoration: "underline", textUnderlineOffset: "5px", marginBottom: "20px" }}>
                        Tüm Suzuki Yedek Parçalar
                    </Typography>
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
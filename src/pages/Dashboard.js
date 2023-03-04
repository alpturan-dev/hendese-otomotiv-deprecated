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
import SearchAppBar from '../components/SearchBar';

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
                <Box sx={{ height: "500px" }}>
                    <Slider />
                </Box>
                <Container sx={{ paddingBottom: "40px", paddingTop: "20px", display: "flex", gap: "20px" }}>
                    <Box sx={{ width: "20%" }}>
                        Blabla
                    </Box>
                    <Box sx={{ width: "80%" }}>
                        <h1 style={{ display: "none" }}>Tüm Suzuki Yedek Parçalar</h1>
                        <Box sx={{ border: "1px solid #ddd", margin: "0 0 30px 0", borderRadius: "5px", width: "50%", left: "0" }}>
                            <SearchAppBar />
                        </Box>
                        <Typography variant='h5' sx={{ marginBottom: "10px", fontWeight: "bolder" }}>
                            Tüm Suzuki Yedek Parçalar
                        </Typography>
                        <hr />
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginY: "20px" }}>
                            {products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                        </Grid>
                        {categories.map((category, index) => {
                            const filteredProducts = products.filter((product) => (product.category === category));
                            return (
                                filteredProducts.length > 0 && (
                                    <div key={index}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <Typography variant='h5' sx={{ marginY: "10px", fontWeight: "bolder" }}>
                                                {category}
                                            </Typography>
                                            <Typography >
                                                Diger urunler
                                            </Typography>
                                        </Box>
                                        <hr style={{ color: "gray", opacity: "0.6" }} />
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginX: "auto", marginY: "20px" }}>
                                            {filteredProducts.map((product, index) =>
                                            (
                                                <ProductCard key={index} product={product} />
                                            ))}
                                        </Grid>
                                    </div>
                                )
                            )
                        })}
                    </Box>
                </Container>
            </Box>
            <FloatingWhatsApp />
            <Footer />
        </>
    )
}

export default Dashboard
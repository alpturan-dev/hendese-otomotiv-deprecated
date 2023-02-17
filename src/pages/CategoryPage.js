import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Typography, Grid, Container, Box } from '@mui/material';
import ProductCard from '../components/ProductCard';
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase'
import { toast, Toaster } from 'react-hot-toast';

function CategoryPage() {
    const { categoryName } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const productsRef = collection(db, "products");

    useEffect(() => {
        const getProducts = async () => {
            toast.loading("");
            const data = await getDocs(productsRef);
            const displaydata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setFilteredProducts(displaydata.filter((product) => (product.category === categoryName)))
        }
        getProducts();
        toast.dismiss();
        console.log(filteredProducts)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Navbar />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Container sx={{ paddingBottom: "40px", paddingTop: "20px" }}>
                    <Typography variant='h5' sx={{ textDecoration: "underline", textUnderlineOffset: "8px" }}>
                        {categoryName}
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginX: "auto" }}>
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default CategoryPage
import { Container, Box } from '@mui/material'
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
                <Container maxWidth="lg" >
                    Dashboard
                    {products.length !== 0 ? products.map((product, key) => (
                        <Box key={key}>{product.name}</Box>
                    )) :
                        "Henuz hicbisi yok"}
                </Container>
            </Box>
        </>
    )
}

export default Dashboard
import React, { useEffect } from 'react'
import { CssBaseline, Container, Box, Typography, Button } from '@mui/material';
import SearchAppBar from '../components/SearchBar';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { logout, db, storage } from '../firebase'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';
import {
    ref,
    deleteObject
} from "firebase/storage";
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import ProductTable from '../components/ProductTable';
import AddProductModal from '../components/AddProductModal';
import ModalContext from '../context/ModalContext';
import FilterCategorySelect from '../components/FilterCategorySelect';
import FilterModelSelect from '../components/FilterModelSelect';
function AdminPanel() {
    const navigate = useNavigate();
    const { email, setEmail, password, setPassword, products, setProducts } = useContext(UserContext);
    const {
        setOpen,
        handleOpen,
        newProductImages,
        setNewProductImages,
        newProductName,
        setNewProductName,
        newProductDescription,
        setNewProductDescription,
        newProductStock,
        setNewProductStock,
        newProductOEM,
        setNewProductOEM,
        newProductPrice,
        setNewProductPrice,
        newProductCategory,
        setNewProductCategory,
        newProductModel,
        setNewProductModel } = useContext(ModalContext);
    const handleLogout = async () => {
        toast.loading('Çıkış Yapılıyor...');
        await logout();
        setEmail(null);
        setPassword(null);
        setTimeout(() => {
            toast.dismiss();
            return navigate('/login');
        }, 1000)
    }
    const productsRef = collection(db, "products");
    useEffect(() => {
        if (email === null && password === null) {
            return navigate('/login');
        }
        const getProducts = async () => {
            toast.loading("Ürünler taranıyor...");
            const data = await getDocs(productsRef);
            const displaydata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setProducts(displaydata);
            console.log(displaydata);
            toast.dismiss();
        }
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addProduct = async () => {
        toast.loading("Ürün ekleniyor...")
        try {
            await addDoc(productsRef,
                { images: newProductImages, name: newProductName, description: newProductDescription, stock: newProductStock, oem: newProductOEM, price: newProductPrice, category: newProductCategory, model: newProductModel });
        } catch (e) {
            console.log(e.message, typeof (newProductImages));
        }
        setProducts([...products,
        { images: newProductImages, name: newProductName, description: newProductDescription, stock: newProductStock, oem: newProductOEM, price: newProductPrice, category: newProductCategory, model: newProductModel }]);
        setNewProductName(null);
        setNewProductImages([]);
        setNewProductDescription(null);
        setNewProductStock(null);
        setNewProductOEM(null);
        setNewProductPrice(null);
        setNewProductCategory(null);
        setNewProductModel(null);
        setOpen(false);
        toast.dismiss();
        toast.success("Ürün eklendi!");
    }

    const deleteProduct = async (product) => {
        toast.loading("Ürün siliniyor...")
        const userDoc = doc(db, 'products', product.id);
        console.log("userDoc", product.images);
        product.images.map((image) => {
            const deleteRef = ref(storage, image);
            return deleteObject(deleteRef).then(() => {
                toast.dismiss();
                toast.success("Ürün silindi!")
            }).catch((error) => {
                toast.dismiss();
                toast.error("Ürün silinemedi!" + error.message)
            });
        })
        await deleteDoc(userDoc);
        setProducts(products.filter((item) => item.id !== product.id));
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ bgcolor: "secondary.main" }}>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <Container maxWidth="lg" sx={{ marginTop: "10px" }}>
                    {/* Navbar */}
                    <Box
                        sx={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #ddd" }}
                    >
                        <Typography variant='h4'>
                            Admin Paneli
                        </Typography>
                        <Box
                            sx={{ display: "flex", alignItems: "center", gap: "40px" }}
                        >
                            <Typography variant="subtitle1">Hoşgeldiniz {email}!</Typography>
                            <Button
                                sx={{
                                    gap: "10px", border: "1px solid primary.main",
                                    backgroundColor: "#ED3137", color: "white", padding: "10px 20px", fontSize: "0.7rem",
                                    '&:hover': {
                                        backgroundColor: "#ED3137",
                                        color: "white",
                                        opacity: "0.9"
                                    }
                                }} onClick={handleLogout}>
                                <Typography variant="subtitle1" >Çıkış Yap</Typography>
                                <ExitToAppRoundedIcon />
                            </Button>
                        </Box>
                    </Box>
                    {/* Content */}
                    <Box maxWidth="lg" sx={{ marginTop: "20px", marginX: "auto", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <AddProductModal addProduct={addProduct} />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <SearchAppBar />
                            <FilterCategorySelect />
                            <FilterModelSelect />
                            <Button onClick={handleOpen}
                                sx={{
                                    gap: "10px",
                                    backgroundColor: "#1D7091", color: "white", padding: "15px 12px", fontSize: "1rem",
                                    '&:hover': {
                                        backgroundColor: "#1D7091",
                                        color: "white",
                                        opacity: "0.9"
                                    }
                                }}
                            >
                                <AddBoxRoundedIcon />
                                <Typography variant="subtitle1">Ürün Ekle</Typography>
                            </Button>
                        </Box>
                        <ProductTable product={products} deleteProduct={deleteProduct} />
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default AdminPanel
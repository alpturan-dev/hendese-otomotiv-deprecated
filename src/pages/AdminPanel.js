import React, { useEffect, useState } from 'react'
import { Modal, CssBaseline, Container, Box, Typography, Button, TableCell, TableRow, TableBody, Paper, Table, TableHead, TableContainer, TextField } from '@mui/material';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { logout, db, storage } from '../firebase'
import { v4 } from "uuid";
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
} from "firebase/storage";
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
function AdminPanel() {
    const navigate = useNavigate();
    const { email, setEmail, password, setPassword, products, setProducts } = useContext(UserContext);
    const handleLogout = async () => {
        await logout();
        setEmail(null);
        setPassword(null);
        setTimeout(() => {
            return navigate('/login');
        }, 1000)
    }
    const productsRef = collection(db, "products");
    useEffect(() => {
        if (email === null && password === null) {
            return navigate('/login');
        }
        const getProducts = async () => {
            const data = await getDocs(productsRef);
            const displaydata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setProducts(displaydata);
            console.log(displaydata);
        }
        getProducts();
    }, [])

    //Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [newProductImage, setNewProductImage] = useState(null);
    const [newProductName, setNewProductName] = useState("");
    const [newProductDescription, setNewProductDescription] = useState("");

    const uploadImage = async () => {
        if (newProductImage == null) return;
        const imageRef = ref(storage, `images/${newProductImage.name + v4()}`);
        uploadBytes(imageRef, newProductImage).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                // setImageUrls((prev) => [...prev, url]);
                setNewProductImage(url);
                toast.success("Resim yüklendi!");
            });
        });
    }
    const addProduct = async () => {
        try {
            await addDoc(productsRef, { image: newProductImage, name: newProductName, description: newProductDescription });
        } catch (e) {
            console.log(e.message);
        }
        setProducts([...products, { image: newProductImage, name: newProductName, description: newProductDescription }]);
        console.log("add producttaki products", products);
        setNewProductName(null);
        setNewProductImage(null);
        setNewProductDescription(null);
        setOpen(false);
        toast.success("Ürün eklendi!");
    }

    const deleteProduct = async (product) => {
        const userDoc = doc(db, 'products', product.id);
        await deleteDoc(userDoc);
        const deleteRef = ref(storage, product.image);
        deleteObject(deleteRef).then(() => {
            toast.success("Urun silindi!")
        }).catch((error) => {
            toast.error("Urun silinemedi!" + error.message)
        });
        setProducts(products.filter((item) => item.id !== product.id));
        setTimeout(() => {
            window.location.reload();
        }, 1000);
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
                            <Typography variant="subtitle1">Hoşgeldiniz! {email}</Typography>
                            <Button sx={{ padding: "10px 8px", fontSize: "1.1rem", gap: "10px" }} onClick={handleLogout}>
                                <Typography variant="subtitle1">Çıkış Yap</Typography>
                                <ExitToAppRoundedIcon />
                            </Button>
                        </Box>
                    </Box>
                    {/* Content */}
                    <Box maxWidth="lg" sx={{ marginTop: "20px", marginX: "auto", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography
                                variant="h5" sx={{ fontWeight: "bold", textDecoration: "underline" }}
                            >
                                Ürünler
                            </Typography>
                            <Button onClick={handleOpen}
                                sx={{
                                    gap: "10px",
                                    backgroundColor: "#ED3137", color: "white", padding: "15px 12px", fontSize: "1rem",
                                    '&:hover': {
                                        backgroundColor: "#ED3137",
                                        color: "white",
                                        opacity: "0.9"
                                    }
                                }}
                            >
                                <AddBoxRoundedIcon />
                                <Typography variant="h6">Ürün Ekle</Typography>
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '40%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: "700px",
                                        height: "700px",
                                        bgcolor: 'background.paper',
                                        border: '1px solid #ddd',
                                        borderRadius: "5px",
                                        boxShadow: "50px",
                                        p: 4,
                                        display: "flex",
                                        gap: "20px",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2"
                                        sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                        Ürün Resmi
                                    </Typography>
                                    <label style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "6px 12px", cursor: "pointer" }}>
                                        <UploadFileIcon style={{ width: "50px", height: "50px" }} />
                                        <input
                                            type="file"
                                            style={{ display: "none" }}
                                            onChange={(event) => {
                                                setNewProductImage(event.target.files[0]);
                                            }}
                                        />
                                        <Typography>{newProductImage ? "Dosya secildi!" : "Bir dosya secin"}</Typography>
                                    </label>
                                    <Button sx={{
                                        backgroundColor: "#ED3137", color: "white", padding: "8px 6px", fontSize: "0.8rem",
                                        '&:hover': {
                                            backgroundColor: "#ED3137",
                                            color: "white",
                                            opacity: "0.9"
                                        }
                                    }} onClick={uploadImage} size="small">RESMİ YÜKLE</Button>

                                    <Typography id="modal-modal-title" variant="h6" component="h2"
                                        sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                        Ürün Adı
                                    </Typography>
                                    <TextField required autoComplete="off" fullWidth id="standard-basic" variant="outlined"
                                        onChange={(event) => setNewProductName(event.target.value)}
                                    />
                                    <Typography id="modal-modal-title" variant="h6" component="h2"
                                        sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                        Ürün Acıklaması
                                    </Typography>
                                    <TextField
                                        required
                                        autoComplete="off"
                                        id="standard-multiline-static"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        onChange={(event) => setNewProductDescription(event.target.value)}
                                        fullWidth
                                    />
                                    <Button onClick={addProduct} sx={{
                                        backgroundColor: "#ED3137", color: "white", padding: "15px 12px", fontSize: "1.1rem",
                                        '&:hover': {
                                            backgroundColor: "#ED3137",
                                            color: "white",
                                            opacity: "0.9"
                                        }
                                    }}>
                                        <Typography variant="h6">Ürün Ekle</Typography>
                                    </Button>
                                </Box>
                            </Modal>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 1050 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Ürün Resmi</TableCell>
                                        <TableCell align="left">Ürün Adı</TableCell>
                                        <TableCell align="left">Ürün Açıklaması</TableCell>
                                        <TableCell align="left"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products ? products.map((product, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <img style={{ width: "200px", height: "200px" }} src={product.image} alt={product.image}></img>
                                            </TableCell>
                                            <TableCell align="left">{product.name}</TableCell>
                                            <TableCell align="left">{product.description}</TableCell>
                                            <TableCell align="left">
                                                <Button onClick={() => {
                                                    deleteProduct(product);
                                                }}
                                                    sx={{
                                                        gap: "10px",
                                                        backgroundColor: "#ED3137", color: "white", padding: "20px 15px", fontSize: "1rem",
                                                        '&:hover': {
                                                            backgroundColor: "#ED3137",
                                                            color: "white",
                                                            opacity: "0.9"
                                                        }
                                                    }}>
                                                    ÜRÜNÜ SİL
                                                    <DeleteIcon />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )) :
                                        <Box sx={{ padding: "20px 10px" }}>Henüz hicbir ürün eklenmedi.</Box>}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default AdminPanel
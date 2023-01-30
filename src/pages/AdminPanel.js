import React, { useEffect, useState } from 'react'
import { Modal, CssBaseline, Container, Box, Typography, Button, TableCell, TableRow, TableBody, Paper, Table, TableHead, TableContainer, TextField } from '@mui/material';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { logout, db } from '../firebase'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
function AdminPanel() {
    const navigate = useNavigate();
    const { email, setEmail, password, setPassword } = useContext(UserContext);
    const handleLogout = async () => {
        await logout();
        setEmail(null);
        setPassword(null);
        setTimeout(() => {
            return navigate('/login');
        }, 1000)
    }
    const [products, setProducts] = useState([]);
    const productsRef = collection(db, "cities");
    useEffect(() => {
        if (email === null && password === null) {
            return navigate('/login');
        }
        const getCities = async () => {
            const data = await getDocs(productsRef);
            const displaydata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setProducts(displaydata);
            console.log(displaydata);
        }
        getCities();
    }, [])

    //Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [newProductImage, setNewProductImage] = useState("https://via.placeholder.com/150");
    const [newProductName, setNewProductName] = useState("");
    const [newProductDescription, setNewProductDescription] = useState("");

    const addProduct = async () => {
        await addDoc(productsRef, { image: newProductImage, name: newProductName, description: newProductDescription });
        setOpen(false);
        window.location.reload();
    }

    const deleteProduct = async (id) => {
        const userDoc = doc(db, 'cities', id);
        await deleteDoc(userDoc);
        window.location.reload();
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ bgcolor: "secondary.main" }}>
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
                            <Button sx={{ padding: "10px 8px", fontSize: "1.1rem" }} onClick={handleLogout}>
                                <Typography variant="subtitle1">Çıkış Yap</Typography>
                                <ExitToAppRoundedIcon />
                            </Button>
                        </Box>
                    </Box>
                    {/* Content */}
                    {/* <Box sx={{ padding: "20px 20px", border: "1px solid gray", borderRadius: "5px" }} key={key}>{product.name}</Box> */}
                    <Box maxWidth="lg" sx={{ marginTop: "20px", marginX: "auto", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography
                                variant="h5" sx={{ fontWeight: "bold", textDecoration: "underline" }}
                            >
                                Ürünler
                            </Typography>
                            <Button onClick={handleOpen} sx={{ padding: "10px 8px", fontSize: "1.1rem" }}>
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
                                        width: "600px",
                                        height: "600px",
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
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Ürün Resmi Url'si
                                    </Typography>
                                    <TextField required autoComplete="off" fullWidth disabled id="standard-basic" variant="standard"
                                        defaultValue="https://via.placeholder.com/150"
                                        onChange={(event) => setNewProductImage(event.target.value)} />
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Ürün Adı
                                    </Typography>
                                    <TextField required autoComplete="off" fullWidth id="standard-basic" variant="standard"
                                        onChange={(event) => setNewProductName(event.target.value)}
                                    />
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Ürün Acıklaması
                                    </Typography>
                                    <TextField
                                        required
                                        autoComplete="off"
                                        id="standard-multiline-static"
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        onChange={(event) => setNewProductDescription(event.target.value)}
                                        fullWidth
                                    />
                                    <Button onClick={addProduct} sx={{ marginTop: "30px", padding: "10px 8px", fontSize: "1.1rem" }}>

                                        <Typography variant="h6">Ekle</Typography>
                                    </Button>
                                </Box>
                            </Modal>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 1050 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ color: "primary.main" }}>Ürün Resmi</TableCell>
                                        <TableCell sx={{ color: "primary.main" }} align="left">Ürün Adı</TableCell>
                                        <TableCell sx={{ color: "primary.main" }} align="left">Ürün Açıklaması</TableCell>
                                        <TableCell sx={{ color: "primary.main" }} align="left"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products.map((product, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <img style={{ width: "150px", height: "150px" }} src={product.image} alt={product.image}></img>
                                            </TableCell>
                                            <TableCell align="left">{product.name}</TableCell>
                                            <TableCell align="left">{product.description}</TableCell>
                                            <TableCell align="left">
                                                <Button onClick={() => {
                                                    deleteProduct(product.id);
                                                }}>
                                                    Sil
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
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
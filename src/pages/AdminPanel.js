import React, { useEffect, useState } from 'react'
import { Modal, CssBaseline, Container, Box, Typography, Button, TableCell, TableRow, TableBody, Paper, Table, TableHead, TableContainer, TextField } from '@mui/material';
import SearchAppBar from '../components/SearchBar';
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
    const { email, setEmail, password, setPassword, products, setProducts, input } = useContext(UserContext);
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
    const [newProductStock, setNewProductStock] = useState("");
    const [newProductOEM, setNewProductOEM] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");
    const [newProductCategory, setNewProductCategory] = useState("");

    const uploadImage = async () => {
        if (newProductImage == null) return;
        const imageRef = ref(storage, `images/${newProductImage.name + v4()}`);
        uploadBytes(imageRef, newProductImage).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setNewProductImage(url);
                toast.success("Resim yüklendi!");
            });
        });
    }
    const addProduct = async () => {
        try {
            await addDoc(productsRef,
                { image: newProductImage, name: newProductName, description: newProductDescription, stock: newProductStock, oem: newProductOEM, price: newProductPrice, category: newProductCategory });
        } catch (e) {
            console.log(e.message);
        }
        setProducts([...products,
        { image: newProductImage, name: newProductName, description: newProductDescription, stock: newProductStock, oem: newProductOEM, price: newProductPrice, category: newProductCategory }]);
        setNewProductName(null);
        setNewProductImage(null);
        setNewProductDescription(null);
        setNewProductStock(null);
        setNewProductOEM(null);
        setNewProductPrice(null);
        setNewProductCategory(null);
        setOpen(false);
        toast.success("Ürün eklendi!");
    }

    const deleteProduct = async (product) => {
        const userDoc = doc(db, 'products', product.id);
        await deleteDoc(userDoc);
        const deleteRef = ref(storage, product.image);
        deleteObject(deleteRef).then(() => {
            toast.success("Ürün silindi!")
        }).catch((error) => {
            toast.error("Ürün silinemedi!" + error.message)
        });
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
                            <Typography variant="subtitle1">Hoşgeldiniz! {email}</Typography>
                            <Button
                                sx={{
                                    padding: "10px 8px", fontSize: "1.1rem", gap: "10px", border: "1px solid primary.main",
                                    gap: "5px",
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
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: "1000px",
                                        bgcolor: 'background.paper',
                                        border: '1px solid #ddd',
                                        borderRadius: "5px",
                                        boxShadow: "150px",
                                        padding: "15px 70px",
                                        display: "flex",
                                        gap: "15px",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                    <Typography id="modal-modal-title" variant="h5"
                                        sx={{ fontWeight: "bolder", marginBottom: "15px" }}>
                                        Yeni Ürün
                                    </Typography>
                                    <Box sx={{ display: "flex", flexDirection: "row", gap: "50px", justifyContent: "space-between" }}>
                                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <Typography id="modal-modal-title" variant="subtitle"
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
                                                backgroundColor: "#1D7091", color: "white", padding: "8px 6px", fontSize: "0.7rem",
                                                '&:hover': {
                                                    backgroundColor: "#1D7091",
                                                    color: "white",
                                                    opacity: "0.9"
                                                }
                                            }} onClick={uploadImage} size="small">RESMİ YÜKLE</Button>
                                        </Box>
                                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                                            <Typography id="modal-modal-title" variant="subtitle"
                                                sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                                Ürün Adı
                                            </Typography>
                                            <TextField required autoComplete="off" fullWidth id="standard-basic" variant="outlined"
                                                onChange={(event) => setNewProductName(event.target.value)}
                                            />
                                        </Box>
                                    </Box>
                                    <Typography id="modal-modal-title" variant="subtitle"
                                        sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
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
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Typography id="modal-modal-title" variant="subtitle"
                                            sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                            Stok Adedi
                                        </Typography>
                                        <TextField required autoComplete="off" fullWidth id="standard-basic" variant="outlined"
                                            onChange={(event) => setNewProductStock(event.target.value)}
                                        />
                                        <Typography id="modal-modal-title" variant="subtitle"
                                            sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                            Ürün OEM Kodu
                                        </Typography>
                                        <TextField required autoComplete="off" fullWidth id="standard-basic" variant="outlined"
                                            onChange={(event) => setNewProductOEM(event.target.value)}
                                        />
                                        <Typography id="modal-modal-title" variant="subtitle"
                                            sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                            Fiyatı
                                        </Typography>
                                        <TextField required autoComplete="off" fullWidth id="standard-basic" variant="outlined"
                                            onChange={(event) => setNewProductPrice(event.target.value)}
                                        />
                                    </Box>
                                    <Typography id="modal-modal-title" variant="subtitle"
                                        sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                        Ürün Kategorisi
                                    </Typography>
                                    <TextField required autoComplete="off" fullWidth id="standard-basic" variant="outlined"
                                        onChange={(event) => setNewProductCategory(event.target.value)}
                                    />
                                    <Button onClick={addProduct} sx={{
                                        backgroundColor: "#1D7091", color: "white", padding: "15px 12px", fontSize: "1.1rem",
                                        '&:hover': {
                                            backgroundColor: "#1D7091",
                                            color: "white",
                                            opacity: "0.9"
                                        }
                                    }}>
                                        <Typography variant="h6">Ürün Ekle</Typography>
                                    </Button>
                                </Box>
                            </Modal>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <SearchAppBar />
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
                        <TableContainer component={Paper} sx={{ maxHeight: 620, boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px", border: "2px solid #ddd" }}>
                            <Typography variant="h6" sx={{ padding: "15px 20px", fontWeight: "bolder", background: "#f7f7f7" }}>Ürünler</Typography>
                            <Table stickyHeader aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{ textDecoration: "underline" }}>
                                        <TableCell sx={{ fontWeight: "bolder" }}>ÜRÜN RESMi</TableCell>
                                        <TableCell sx={{ fontWeight: "bolder" }} align="left">ÜRÜN ADI</TableCell>
                                        <TableCell sx={{ fontWeight: "bolder" }} align="left">ÜRÜN AÇIKLAMASI</TableCell>
                                        <TableCell sx={{ fontWeight: "bolder" }} align="left">STOK ADEDI</TableCell>
                                        <TableCell sx={{ fontWeight: "bolder" }} align="left">OEM KODU</TableCell>
                                        <TableCell sx={{ fontWeight: "bolder" }} align="left">FİYAT</TableCell>
                                        <TableCell sx={{ fontWeight: "bolder" }} align="left">KATEGORİ</TableCell>
                                        <TableCell sx={{ fontWeight: "bolder" }} align="left"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products.length !== 0 ? products.filter((product) => {
                                        if (product.name.toLowerCase().includes(input)
                                            || product.description.toLowerCase().includes(input)
                                            || product.oem.toLowerCase().includes(input)
                                        ) {
                                            return product;
                                        }
                                    }).map((product, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                transition: "all 0.5s",
                                                '&:last-child td, &:last-child th': { border: 0 },
                                                '&:hover': {
                                                    background: "#ddd"
                                                }
                                            }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <img style={{ width: "150px", height: "150px" }} src={product.image} alt={product.image}></img>
                                            </TableCell>
                                            <TableCell align="left">{product.name}</TableCell>
                                            <TableCell align="left">{product.description}</TableCell>
                                            <TableCell align="left">{product.stock}</TableCell>
                                            <TableCell align="left">{product.oem}</TableCell>
                                            <TableCell align="left">{product.price}</TableCell>
                                            <TableCell align="left">{product.category}</TableCell>
                                            <TableCell align="left">
                                                <Button onClick={() => {
                                                    deleteProduct(product);
                                                }}
                                                    sx={{
                                                        gap: "5px",
                                                        '&:hover': {
                                                            backgroundColor: "white",
                                                            color: "#ED3137",
                                                            opacity: "0.9"
                                                        }
                                                    }}>
                                                    <DeleteIcon
                                                        sx={{
                                                            fontSize: "2rem",
                                                            color: "#ED3137"
                                                        }} />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )) :
                                        <Box sx={{ padding: "20px 10px" }}>Henüz hiçbir ürün eklenmedi.</Box>}
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
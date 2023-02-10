import React from 'react'
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
import { v4 } from "uuid";
import { toast } from 'react-hot-toast';
import { storage } from '../firebase'
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import CategorySelect from './CategorySelect'
import ModelSelect from './ModelSelect'
import { useContext } from 'react';
import ModalContext from '../context/ModalContext';
import SparePartContext from '../context/SparePartContext';
function AddProductModal({ addProduct }) {
    const { categories } = useContext(SparePartContext);
    const {
        open,
        handleClose,
        newProductImage,
        setNewProductImage,
        setNewProductName,
        setNewProductDescription,
        setNewProductStock,
        setNewProductOEM,
        setNewProductPrice,
    } = useContext(ModalContext);

    const uploadImage = async () => {
        toast.loading('Resim yükleniyor...');
        if (newProductImage == null) return;
        const imageRef = ref(storage, `images/${newProductImage.name + v4()}`);
        uploadBytes(imageRef, newProductImage).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setNewProductImage(url);
                toast.dismiss();
                toast.success("Resim yüklendi!");
            });
        });
    }
    return (
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
                    width: "1100px",
                    bgcolor: 'background.paper',
                    border: '1px solid #ddd',
                    borderRadius: "5px",
                    boxShadow: "150px gray",
                    padding: "35px 55px",
                    display: "flex",
                    gap: "25px",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                <Button
                    sx={{
                        position: "absolute", right: "2%", top: "3%", display: "flex", flexDirection: "row-reverse", justifyContent: "center", width: "5%", marginRight: "0",
                        backgroundColor: "#ED3137", color: "white", padding: "6px 4px", fontSize: "1.1rem",
                        '&:hover': {
                            cursor: "pointer",
                            backgroundColor: "#ED3137",
                            color: "white",
                            opacity: "0.9"
                        }
                    }}

                    onClick={handleClose} alt="Kapat"
                >
                    <CloseIcon />
                </Button>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <Typography id="modal-modal-title" variant="h4"
                        sx={{ fontWeight: "bolder", color: "#1D7091", borderBottom: "3px solid #1D7091" }}>
                        Yeni Ürün
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItem: "center", justifyContent: "space-evenly" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                display: "flex", flexDirection: "column", gap: "15px", width: "400px"
                            }}>
                            <Typography id="modal-modal-title" variant="h6"
                                sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                Ürün Resmi
                            </Typography>
                            <label style={{
                                display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", cursor: "pointer", background: "#F0F0F0",
                                boxShadow: "5px 5px 5px gray",
                                padding: "2rem 4rem"
                            }}>
                                {newProductImage ?
                                    <img alt={newProductImage} src={newProductImage} style={{ width: "80px", height: "80px" }} />
                                    :
                                    <UploadFileIcon style={{ width: "80px", height: "80px" }} />
                                }
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={(event) => {
                                        setNewProductImage(event.target.files[0]);
                                    }}
                                />
                                <Typography>{newProductImage ? "Dosya secildi!" : "Bir dosya secin"}</Typography>
                                <Button sx={{
                                    backgroundColor: "#1D7091", color: "white", padding: "8px 6px", fontSize: "0.7rem",
                                    '&:hover': {
                                        backgroundColor: "#1D7091",
                                        color: "white",
                                        opacity: "0.9"
                                    }
                                }} onClick={uploadImage} size="small">
                                    RESMİ YÜKLE
                                </Button>
                            </label>

                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Typography id="modal-modal-title" variant="h6"
                                sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                Ürün Adı
                            </Typography>
                            <TextField color="secondary" required autoComplete="off" fullWidth id="standard-basic" variant="filled"
                                onChange={(event) => setNewProductName(event.target.value)}
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Typography id="modal-modal-title" variant="h6"
                                sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                Ürün Acıklaması
                            </Typography>
                            <TextField
                                color="secondary"
                                required
                                autoComplete="off"
                                id="standard-multiline-static"
                                multiline
                                rows={7}
                                variant="filled"
                                onChange={(event) => setNewProductDescription(event.target.value)}
                                fullWidth
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", marginBottom: "2rem" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Typography id="modal-modal-title" variant="h6"
                                sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                Stok Adedi
                            </Typography>
                            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} color="secondary" required autoComplete="off" fullWidth id="standard-basic" variant="filled"
                                onChange={(event) => setNewProductStock(event.target.value)}
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Typography id="modal-modal-title" variant="h6"
                                sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                Ürün OEM Kodu
                            </Typography>
                            <TextField color="secondary" required autoComplete="off" fullWidth id="standard-basic" variant="filled"
                                onChange={(event) => setNewProductOEM(event.target.value)}
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Typography id="modal-modal-title" variant="h6"
                                sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                Fiyatı (₺)
                            </Typography>
                            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} color="secondary" required autoComplete="off" fullWidth id="standard-basic" variant="filled"
                                onChange={(event) => setNewProductPrice(event.target.value)}
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Typography id="modal-modal-title" variant="h6"
                                sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                Ürün Kategorisi
                            </Typography>
                            <CategorySelect />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Typography id="modal-modal-title" variant="h6"
                                sx={{ fontWeight: "bolder", textDecoration: "underline" }}>
                                Ürün Modeli
                            </Typography>
                            <ModelSelect />
                        </Box>
                    </Box>
                </Box>
                <Box onClick={addProduct} sx={{
                    textAlign: "center", width: "20%", margin: "auto",
                    backgroundColor: "#1D7091", color: "white", padding: "15px 12px", fontSize: "1.1rem",
                    boxShadow: "2px 2px 2px #1D7091",
                    '&:hover': {
                        cursor: "pointer",
                        backgroundColor: "#1D7091",
                        color: "white",
                        opacity: "0.9"
                    }
                }}>
                    <Typography variant="h6">Ürün Ekle</Typography>
                </Box>
            </Box>
        </Modal>
    )
}

export default AddProductModal
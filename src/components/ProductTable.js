import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TableCell, TableRow, TableBody, Paper, Table, TableHead, TableContainer } from '@mui/material';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import SparePartContext from '../context/SparePartContext';
function ProductTable({ deleteProduct }) {
    const { products, input } = useContext(UserContext);
    const { filterCategory, filterModel } = useContext(SparePartContext);
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 620, boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px", border: "2px solid #ddd" }}>
            <Table stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ textDecoration: "underline" }}>
                        <TableCell sx={{ fontWeight: "bolder" }}>Ürün Resmi</TableCell>
                        <TableCell sx={{ fontWeight: "bolder" }} align="left">Ürün Adı</TableCell>
                        <TableCell sx={{ fontWeight: "bolder" }} align="left">Model</TableCell>
                        <TableCell sx={{ fontWeight: "bolder" }} align="left">Ürün Acıklaması</TableCell>
                        <TableCell sx={{ fontWeight: "bolder" }} align="left">Stok</TableCell>
                        <TableCell sx={{ fontWeight: "bolder" }} align="left">OEM</TableCell>
                        <TableCell sx={{ fontWeight: "bolder" }} align="left">Fiyat</TableCell>
                        <TableCell sx={{ fontWeight: "bolder" }} align="left">Kategori</TableCell>
                        <TableCell sx={{ fontWeight: "bolder" }} align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.length !== 0 ? products.filter((product) =>
                        (product.name.toLowerCase().includes(input)
                            || product.model.toLowerCase().includes(input)
                            || product.description.toLowerCase().includes(input)
                            || product.oem.toLowerCase().includes(input)
                        ) &&
                        (product.category === filterCategory || filterCategory === "Tüm Kategoriler")
                        &&
                        (product.model === filterModel || filterModel === "Tüm Modeller")
                        && product
                    ).map((product, index) => (
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
                            <TableCell align="left">{product.model}</TableCell>
                            <TableCell align="left">{product.description}</TableCell>
                            <TableCell align="left">{product.stock}</TableCell>
                            <TableCell align="left">{product.oem}</TableCell>
                            <TableCell align="left">{product.price}₺</TableCell>
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
    )
}

export default ProductTable
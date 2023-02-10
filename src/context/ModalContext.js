import React from 'react'
import { useState, createContext } from "react";
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
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
    const [newProductModel, setNewProductModel] = useState("");
    const modaldata = {
        open,
        setOpen,
        handleOpen,
        handleClose,
        newProductImage,
        setNewProductImage,
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
        setNewProductModel
    }
    return <ModalContext.Provider value={modaldata}>{children}</ModalContext.Provider>
}

export default ModalContext

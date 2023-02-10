import React from 'react'
import { useState, createContext } from "react";
const SparePartContext = createContext();

export const SparePartProvider = ({ children }) => {
    const [categories, setCategories] = useState([
        "Motor",
        "Silindir Kapak",
        "Şanzıman",
        "Şarj-Marş",
        "Klima Kompresörü",
        "Aks",
        "Fren",
        "Stop/Far",
        "Kaporta",
        "İç Trim",
        "Lastik/Jant",
        "Süspansiyon",
        "Ateşleme",
        "Elektronik/Beyin",
        "Radyatör",
        "Direksiyon",
        "Aksesuar"
    ])
    const [models, setModels] = useState([
        "VITARA JLX 88-96",
        "GRAND VITARA 98-05",
        "GRAND VITARA 06-12",
        "GRAND VITARA XL-7",
        "SWIFT"
    ])
    const [filterCategory, setFilterCategory] = useState("");
    const [filterModel, setFilterModel] = useState("");
    const sparepartdata = {
        categories,
        setCategories,
        models,
        setModels,
        filterCategory,
        setFilterCategory,
        filterModel,
        setFilterModel
    }
    return <SparePartContext.Provider value={sparepartdata}>{children}</SparePartContext.Provider>
}

export default SparePartContext;
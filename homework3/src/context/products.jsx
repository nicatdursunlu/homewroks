import React, {useState, useEffect, useContext, createContext} from 'react';
import { BrouserRouter as Router, Route, Switch} from 'react-router-dom';

export const productsContext = createContext();

export const ProductsContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        const res = await fetch('http://localhost:3000/products');
        const data = await res.json();

        setProducts(data);
    }
    
    useEffect(() => {
        getProducts();
    }, [])

    return(
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    )
}
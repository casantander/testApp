import { createContext, useReducer } from "react";
import { productReducer } from "./ProductReducer";

export interface Product {
    nombre:        string;
    descripcion:   string;
    precio:        number | string;
    categoria:     string;
    stock:         boolean;
    receta:        boolean;
    retiro_compra: boolean;
    despacho:      boolean;
}

export interface ProductsState {
    Products: Product[];
    CartShop: Product[];
}

export const productsInitialState: ProductsState = {
    Products: [],
    CartShop: [],
}

export interface ProductContextProps {
    productsState: ProductsState;
}

export const ProductsContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children}: any) => {

    const [productsState, dispatch] = useReducer(productReducer, productsInitialState)

    return (
        <ProductsContext.Provider value={{
            productsState  
        }}>
            { children}
        </ProductsContext.Provider>
    )
}
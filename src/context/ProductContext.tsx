import { createContext, useReducer } from "react";
import { productReducer } from "./productReducer";
import ListProducts from '../data/Productos.json';
import { obtenerProductos } from "../services/ProductServices";

export interface Product {
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;
    subCategoria: string;
    stock: boolean;
    receta: boolean;
    retiro_compra: boolean;
    despacho: boolean;
    imagen: string;
    cantidad: number;
}

export interface ProductsState {
    Products: Product[];
    CartShop: Product[];
    Categorias: string[];
    FiltroCategoria: string;
}

export const productsInitialState: ProductsState = {
    Products: obtenerProductos(),
    CartShop: [],
    Categorias: ['Medicamentos', 'Belleza', 'Cuidado Personal'],
    FiltroCategoria: ''
}

export interface ProductContextProps {
    productsState: ProductsState;
    addShop: (product: Product, cantidadAgregada: number) => void;
    deleteProduct: (nombre: string) => void;
    filterProducts: (categoria: string) => void;
    searchProduct: (texto: string) => void;
    deleteFilter: () => void;
}

export const ProductsContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {

    const [productsState, dispatch] = useReducer(productReducer, productsInitialState)

    const addShop = (product: Product, cantidadAgregada: number) => {
        dispatch({ type: 'addShop', payload: product, cantidadAgregada: cantidadAgregada });
    }

    const deleteProduct = (nombre: string) => {
        dispatch({ type: 'deleteProduct', payload: nombre });
    }

    const filterProducts = (categoria: string) => {
        dispatch({ type: 'filterProducts', payload: categoria });
    }

    const searchProduct = (texto: string) => {
        dispatch({ type: 'searchProduct', payload: texto });
    }

    const deleteFilter = () => {
        dispatch({ type: 'deleteFilter'});
    }

    return (
        <ProductsContext.Provider value={{
            productsState,
            addShop,
            deleteProduct,
            filterProducts,
            searchProduct,
            deleteFilter
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
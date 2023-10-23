import { obtenerProductos } from '../services/ProductServices';
import { ProductsState, Product } from './ProductContext';

type ProductAction =
    | { type: 'addShop', payload: Product, cantidadAgregada: number}
    | { type: 'deleteProduct', payload: string }
    | { type: 'filterProducts', payload: string }
    | { type: 'deleteFilter'}
    | { type: 'searchProduct', payload: string };

export const productReducer = (state: ProductsState, action: ProductAction): ProductsState => {

    let cartShop: Product[] = state.CartShop
    let listaProductos: Product[] = obtenerProductos()

    switch (action.type) {
        case 'addShop':
            let productoAgregado: Product = action.payload;
            let existeProducto: boolean = false;
            let indice: number = 0;
            if(cartShop.length > 0){
                for (let index = 0; index < cartShop.length; index++) {
                    let productoCarro= cartShop[index];
                    if( productoCarro.nombre === productoAgregado.nombre){
                        existeProducto = true;
                        indice= index;
                    }
                }

                if( existeProducto){
                    cartShop[indice].cantidad = cartShop[indice].cantidad + action.cantidadAgregada
                } else {
                    productoAgregado.cantidad = action.cantidadAgregada
                    cartShop.push(productoAgregado)
                }

            } else {
                productoAgregado.cantidad = action.cantidadAgregada
                cartShop.push(productoAgregado) 
            }
            return {
                ...state,
                CartShop: cartShop
            }
            break;
        case 'deleteProduct':
            cartShop = cartShop.filter(cartShop => cartShop.nombre !== action.payload)
            return {
                ...state,
                CartShop: cartShop
            }
        case 'filterProducts':
            listaProductos = listaProductos.filter(producto => producto.categoria === action.payload)
            return {
                ...state,
                Products: listaProductos,
                FiltroCategoria: action.payload
            }
        case 'deleteFilter':
            return {
                ...state,
                Products: listaProductos,
                FiltroCategoria: ""
            }
        case 'searchProduct':
            listaProductos = listaProductos.filter(
                producto => producto.nombre.toLowerCase().includes(action.payload) 
                || producto.categoria.toLowerCase().includes(action.payload)
                || producto.subCategoria.toLowerCase().includes(action.payload)
                || producto.descripcion.toLowerCase().includes(action.payload))
            return {
                ...state,
                Products: listaProductos
            }
        default:
            break;
    }

    return state;
}
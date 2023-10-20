import { ProductsState } from "./ProductContext";

type ProductAction = 
    | { type: 'addShop'}
    | { type: 'deleteShop'}
    | { type: 'filterProducts'}
    | { type: 'showProduct', payload: string};

export const productReducer = (state: ProductsState, action: ProductAction): ProductsState =>{

    switch (action.type) {
        case 'addShop':
            
            break;
    
        default:
            break;
    }

    return state;
}
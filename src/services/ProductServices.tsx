import { Product } from '../context/ProductContext';
import ListProducts from '../data/Productos.json';

export const obtenerProductos = (): Product[] =>  {
    let product: Product[] = [];
    const { Productos } = ListProducts;

    for (let index = 0; index < Productos.length; index++) {
        let listaCampos: string = JSON.stringify(Productos[index]);
        listaCampos = listaCampos.replace('{', '');
        listaCampos = listaCampos.replace('}', '');
        let listaCamposSeparados: string[] = listaCampos.split(',');
        let imagen: string = listaCamposSeparados[9].split(':')[1] + ":" + listaCamposSeparados[9].split(':')[2]

        let productoFinal: Product = {
            nombre: listaCamposSeparados[0].split(':')[1].replaceAll('"', ""),
            descripcion: listaCamposSeparados[1].split(':')[1].replaceAll('"', ""),
            precio: +listaCamposSeparados[2].split(':')[1].replaceAll('"', ""),
            categoria: listaCamposSeparados[3].split(':')[1].replaceAll('"', ""),
            subCategoria: listaCamposSeparados[4].split(':')[1].replaceAll('"', ""),
            stock: JSON.parse(listaCamposSeparados[5].split(':')[1].replaceAll('"', "")),
            receta: JSON.parse(listaCamposSeparados[6].split(':')[1].replaceAll('"', "")),
            retiro_compra: JSON.parse(listaCamposSeparados[7].split(':')[1].replaceAll('"', "")),
            despacho: JSON.parse(listaCamposSeparados[8].split(':')[1].replaceAll('"', "")),
            imagen: imagen.replaceAll('"', ""),
            cantidad: 0
        }
        product.push(productoFinal);
    }
    return product;
}
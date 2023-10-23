import React, { useContext } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Product, ProductsContext } from '../context/ProductContext';
import { useNavigation } from '@react-navigation/core';

interface Props {
    product: Product;
}

export const ListCarrito = ({ product }: Props) => {

    const navigation = useNavigation();
    const { addShop, deleteProduct } = useContext(ProductsContext)
    const { nombre, precio, imagen, cantidad}= product; 
    
    return (
        <View style={ styles.contenedorLista}>
            <View style={ styles.contenedorImagen}>
                <Image style={ styles.imagen}
                    source={{ uri: imagen }}/>
            </View>
            
            <View style={ styles.contenedorCaracteristicas}>
                <Text style={styles.textoCaracteristicas}>{nombre.toUpperCase()}</Text>
                <Text style={styles.textoCaracteristicas}>Precio: ${precio}</Text>
                <Text style={styles.textoCaracteristicas}>Cantidad: {cantidad}</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.contenedorBotonAgregar}
                    onPress={() => { addShop(product, 1) }}>
                    <Text style={styles.textoBotonAgregar}>Agregar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contenedorBotonEliminar}
                    onPress={() => { deleteProduct(product.nombre) }} >
                    <Text style={ styles.textoBotonEliminar}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorLista: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 10,
        height: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginHorizontal: 15,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
    },
    contenedorImagen: {
        marginRight: 10,
        top: -1
    },
    imagen: {
        width: 80,
        height: 80
    },
    contenedorCaracteristicas: {
        marginTop: 10,
        flex: 1
    },
    textoCaracteristicas: {
        color: 'black',
        flex: 1
    },
    contenedorBotonAgregar: {
        backgroundColor: '#0074C8',
        width: 100,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: -1
    },
    textoBotonAgregar: {
        fontSize: 15,
        color: 'white'
    },
    contenedorBotonEliminar: {
        backgroundColor: '#0074C8',
        width: 100,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 10
    },
    textoBotonEliminar: {
        fontSize: 15,
        color: 'white'
    }
});
import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Product } from '../context/ProductContext';
import { useNavigation } from '@react-navigation/core';

interface Props {
    product: Product;
}

export const ListProduct = ({ product }: Props) => {

    const navigation = useNavigation();

    const { nombre, descripcion, precio, imagen}= product; 
    
    return (
        <TouchableOpacity
            style={ styles.contenedorProducto}
             onPress={() => navigation.navigate('ProductScreen', {product})}>

            <View style={ styles.contenedorImagen}>
                <Image style={ styles.imagen}
                    source={{ uri: imagen }}/>
            </View>

            <View style={ styles.contenedorCaracteristicas}>
                <Text style={styles.textoCaracteristica}>{nombre.toUpperCase()}</Text>
                <Text style={styles.textoCaracteristica}>{descripcion}</Text>
                <Text style={styles.textoCaracteristica}>Precio: ${precio}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contenedorProducto: {
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 10,
        height: 80,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16
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
    textoCaracteristica: {
        color: 'black',
        flex: 1
    }
});
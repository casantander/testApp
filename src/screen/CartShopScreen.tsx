import React, { useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { ProductsContext } from '../context/ProductContext';
import { ListCarrito } from '../components/ListCarrito';

export const CartShopScreen = () => {

    const navigation = useNavigation();
    const { productsState: { CartShop } } = useContext(ProductsContext);

    useEffect(() => {
        navigation.setOptions({
            title: "",
            headerLeft: () =>
                <TouchableOpacity
                    style={styles.contenedorBotonRegresar}
                    onPress={() => navigation.navigate('TiendaScreen')}>

                    <Icon name="arrow-back-sharp" size={30} color='white' />
                    <Text style={styles.textoBotonRegresar} >Regresar</Text>
                </TouchableOpacity>
        })
    }, [])

    return (
        <View style={styles.contenedorLista}>

            {CartShop.length > 0
                ? <FlatList
                    data={CartShop}
                    keyExtractor={(product) => product.nombre}
                    renderItem={({ item }) => <ListCarrito product={item} />}
                    ListHeaderComponent={headerList()}
                />
                : <Text style={{
                    ...styles.sinProductos,
                    fontFamily: Platform.OS === 'ios' ? "AvenirNextCondensed-Medium" : "sans-serif-condensed"
                }}>No hay productos en tu carrito</Text>
            }
        </View>
    )
}

const headerList = () => {
    return (
        <View style={styles.contenedorTituloLista}>
            <Text style={styles.textoTituloLista}> Carrito </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorBotonRegresar: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textoBotonRegresar: {
        fontSize: 20,
        color: 'white',
        marginLeft: 5
    },
    contenedorLista: {
        backgroundColor: '#EAECEE',
        flex: 1
    },
    contenedorTituloLista: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    textoTituloLista: {
        color: 'black',
        fontSize: 40
    },
    sinProductos:{
        fontSize: 40,
        color: '#0074C8',
        alignItems: 'center',
    }
});
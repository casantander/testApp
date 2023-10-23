import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, FlatList, StyleSheet, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { Product, ProductsContext } from '../context/ProductContext';
import { ListProduct } from '../components/ListProduct'
import { SearchInput } from '../components/campoBusqueda'

interface Props extends DrawerScreenProps<any, any>{};

export const TiendaScreen = ({ navigation }: Props) => {

    const { productsState: { Products, FiltroCategoria }, deleteFilter, searchProduct } = useContext(ProductsContext);
    const [ texto, setTexto ] = useState('')

    useEffect(() => {
        if( texto.length === 0){
            deleteFilter();
        }
        
        if ( texto.length > 0 ) {
            searchProduct(texto);
        }

    }, [texto])
    
    useEffect(() => {
        navigation.setOptions({
            title: "",
            headerLeft: () =>
                <TouchableOpacity style={styles.botonHeaderLeft}
                    onPress={() => { navigation.openDrawer() }}>
                    <Icon name="menu-outline" size={40} color='white' />
                    <Text style={styles.textoCategoria}>Categorias </Text>
                </TouchableOpacity>,
            headerRight: () =>
                <View style={styles.contenedorHeaderRight}>
                    <SearchInput onDebounce={ (value) => setTexto( value )} />
                    <TouchableOpacity style={styles.boton}
                        onPress={() => navigation.navigate('CartShopScreen')}>
                        <Icon name="cart-sharp" size={40} color='white' />
                    </TouchableOpacity>
                </View>
        })
    }, [])

    return (
        <View style={styles.contenedorLista}>
            <View style={styles.contenedorTituloLista}>
                <Text style={styles.tituloLista}> Productos </Text>
            </View>
            
            {
                texto.length > 0 && <Text style={{ color: 'black' }}>Busqueda: {texto}</Text>
            }

            {
                FiltroCategoria !== "" &&
                <TouchableOpacity onPress={() => deleteFilter()}
                    style={styles.botonEliminarFiltro}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.contenedorTexto}>{FiltroCategoria}</Text>
                        <Icon name="close-circle-sharp" size={17} color="white" />
                    </View>
                </TouchableOpacity>
            }

            {Products.length > 0
                ? <FlatList
                    data={Products}
                    keyExtractor={(product) => product.nombre}
                    renderItem={({ item }) => <ListProduct product={item} />}
                />
                : <Text style={{
                    ...styles.sinResultados,
                    fontFamily: Platform.OS === 'ios' ? "AvenirNextCondensed-Medium" : "sans-serif-condensed"
                }}>No hay resultados para la busqueda</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    botonHeaderLeft: {
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoCategoria: {
        color: 'white',
        fontSize: 18
    },
    contenedorHeaderRight: {
        flexDirection: 'row',
        marginRight: 8
    },
    boton: {
        marginLeft: 0
    },
    contenedorTituloLista: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    tituloLista: {
        color: '#0074C8',
        fontSize: 20
    },
    contenedorLista: {
        marginHorizontal: 30,
        marginTop: 15
    },
    sinResultados: {
        fontSize: 40,
        color: '#0074C8',
        alignItems: 'center'
    },
    botonEliminarFiltro:{
        backgroundColor: '#0074C8',
        height: 35,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    contenedorTexto:{
        color: 'white',
        fontSize: 15
    }
});
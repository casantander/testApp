import React, { useContext, useState } from 'react'
import { View, StyleSheet, Image, Text, Platform, useWindowDimensions, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Product, ProductsContext } from '../context/ProductContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { OpcionesCompra } from './OpcionesCompra';
import { MensajeCarrito } from './MensajeCarrito';

interface Props {
    product: Product;
}

export const ProductDetail = ({ product }: Props) => {
    const { subCategoria, descripcion, despacho, nombre, precio, receta, retiro_compra, stock, imagen} = product;
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const { addShop } = useContext(ProductsContext);
    
    const [cantidad, setCantidad] = useState(0);
    const [esVisible, setEsVisible] = useState(false);

    const sumarCantidad = () => {
        if (cantidad < 30){
            setCantidad(cantidad +1)
        }
    }
    
    const restarCantidad = () => {
        if (cantidad !== 0){
            setCantidad(cantidad -1)
        }
    }

    const agregarCantidad = (cantidad: number) => {
        addShop(product, cantidad)
        setEsVisible(true)
        setTimeout( () => {
            navigation.navigate('TiendaScreen')
        }, 1000 )
    }


    return (
        <View style={{
            ...styles.contenedor,
            height: height > 850 ? height - 120 : height
        }}>
            <MensajeCarrito esVisible={esVisible}/>
            <View style={styles.contenedorImagen} >
                <Image style={styles.imagen}
                    source={{ uri: imagen }} />
            </View>

            <View style={styles.contenedorCaracteristicas} >
                {/* Android: sans-serif-condensed IOS: Avenir Next Condensed*/}
                <Text style={{
                    ...styles.textoNombre,
                    fontFamily: Platform.OS === 'ios' ? "AvenirNextCondensed-Medium" : "sans-serif-condensed"
                }}>{nombre}</Text>

                <Text style={{
                    ...styles.textoSubcategoria,
                    fontFamily: Platform.OS === 'ios' ? "AvenirNext-Regular" : "sans-serif-light",
                }}>{subCategoria}</Text>

                <Text style={styles.textoDescripcion}>{descripcion}</Text>

                <View style={styles.contenedorPrecio}>
                    <Text style={styles.textoPrecio}>Precio: ${precio}</Text>
                </View>

                <OpcionesCompra activacion={stock} texto='Stock disponible' />
                <OpcionesCompra activacion={retiro_compra} texto='Retiro en Tienda' />
                <OpcionesCompra activacion={despacho} texto='Despacho a domicilio' />
                <OpcionesCompra activacion={receta} texto='Venta sin Receta' />

                <View style={styles.contenedorCantidad}>
                    <TouchableOpacity style={styles.botonModificarCantidad} onPress={() => restarCantidad()}>
                        <Text style={styles.textoRestarCantidad}>
                            -
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.textoCantidad}>
                            {cantidad}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.botonModificarCantidad} onPress={() => sumarCantidad()}>
                        <Text style={styles.textoSumarCantidad}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contenedorBotonAgregar}>
                    <TouchableOpacity
                        style={styles.botonAgregar}
                        onPress={() => {
                            agregarCantidad(cantidad)
                            
                        }}
                    >
                        <Text style={styles.textoAgregar} >
                            Agregar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#EAECEE',
        alignItems: 'center'
    },
    contenedorImagen: {
        flex: 3,
        justifyContent: 'center',
        flexDirection: 'row',
        height: 250
    },
    imagen: {
        width: 250,
        height: 250,
        alignSelf: 'flex-end',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32
    },
    contenedorCaracteristicas: {
        width: 300,
        marginTop: 20,
        marginHorizontal: 50,
        flex: 5,
        borderRadius: 10,
        borderWidth: 10,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        backgroundColor: 'white'
    },
    textoNombre: {
        color: 'black',
        fontSize: 35,
        marginBottom: 10,
        textTransform: 'capitalize'
    },
    textoSubcategoria: {
        color: 'black',
        marginBottom: 10,
        fontSize: 13,
        top: -10,
        textTransform: 'capitalize'
    },
    textoDescripcion: {
        color: 'black',
        fontSize: 20,
        marginBottom: 10
    },
    contenedorPrecio: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginVertical: 8,
        paddingVertical: 10
    },
    textoPrecio: {
        color: 'black',
        marginBottom: 10,
        fontWeight: 'bold',
        top: 2,
        fontSize: 25
    },
    texto: {
        color: 'black',
        fontSize: 35,
        marginBottom: 10
    },
    contenedorCantidad: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10
    },
    botonModificarCantidad: {
        backgroundColor: '#0074C8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 25,
        width: 25
    },
    textoSumarCantidad: {
        color: 'white',
        fontSize: 25,
        top: -5
    },
    textoCantidad: {
        width: 50,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'black'
    },
    textoRestarCantidad: {
        color: 'white',
        fontSize: 30,
        top: -7
    },
    contenedorBotonAgregar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 20
    },
    botonAgregar: {
        backgroundColor: '#0074C8',
        width: 140,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    textoAgregar: {
        fontSize: 20,
        color: 'white'
    }
});

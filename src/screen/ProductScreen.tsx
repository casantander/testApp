import React, { useEffect } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { Product } from '../context/ProductContext';
import { ProductDetail } from '../components/ProductDetail';
import { useNavigation } from '@react-navigation/core';

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'>{};

export const ProductScreen = ({ route }: Props) => {

    const navigation = useNavigation();

    const listaProducto: Product[] = [];
    listaProducto.push(route.params.product);

    useEffect(() => {
        navigation.setOptions({
            title: "",
            headerLeft: () =>
                <TouchableOpacity
                    style={styles.botonTienda}
                    onPress={() => navigation.navigate('TiendaScreen')}>
                    <Icon name="arrow-back-sharp" size={30} color='white' />
                    <Text style={styles.textoTienda} >Tienda</Text>
                </TouchableOpacity>
        })
    }, [])


    return (

        <ScrollView>
            <ProductDetail product={route.params.product} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    botonTienda:{
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textoTienda:{
        fontSize: 20,
        color: 'white',
        marginLeft: 5
    }
});



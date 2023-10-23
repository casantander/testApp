import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ProductsContext } from '../context/ProductContext';
import { useNavigation } from '@react-navigation/core';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

interface Props {
    categorias: string[];
    navigation: DrawerNavigationHelpers;
}

export const ListaCategorias = ({ categorias, navigation }: Props) => {

    const { filterProducts } = useContext(ProductsContext);

    return (
        <View style={styles.contenedor} >
            <TouchableOpacity style={styles.botonCategoria}
                onPress={() => {
                    filterProducts(categorias[0])
                    navigation.closeDrawer()
                }}>
                <Text style={styles.textoCategoria} >
                    {categorias[0]}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonCategoria}
                onPress={() => {
                    filterProducts(categorias[1])
                    navigation.closeDrawer()
                }}>
                <Text style={styles.textoCategoria} >
                    {categorias[1]}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonCategoria}
                onPress={() => {
                    filterProducts(categorias[2])
                    navigation.closeDrawer()
                }}>
                <Text style={styles.textoCategoria} >
                    {categorias[2]}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 20,
        alignItems: 'center'
    },
    botonCategoria: {
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#0074C8',
        width: 250,
        height: 50
    },
    textoCategoria: {
        color: '#0074C8',
        fontSize: 23
    }
});
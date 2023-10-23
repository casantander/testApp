import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    activacion: boolean, 
    texto: string
}
export const OpcionesCompra = ({activacion, texto } : Props) => {
    return (
        <View style={ styles.contenedor}>
            {activacion
                ? <Icon name="checkmark-circle-sharp" size={17} color="green" />
                : <Icon name="close-circle-sharp" size={17} color="red" />
            }
            <Text style={ styles.texto }> { texto }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        flexDirection: 'row',
    },
    texto: {
        color: 'black',
        fontSize: 15,
        marginBottom: 10
    }
});
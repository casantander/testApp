import React from 'react'
import { Text, StyleSheet, Modal, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    esVisible: boolean
}

export const MensajeCarrito = ({esVisible} :Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <Modal
            visible={esVisible}
            animationType='fade'
            transparent={true}
        >
            <View style={{
                ...styles.contenedor,
                top: top
            }}>
                <Text style={ styles.texto}>Se agrego un producto al carro</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0074C8'
    },
    texto:{
        color: 'white',
        fontSize: 25
    }
});
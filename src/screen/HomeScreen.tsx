import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{
            marginTop: top,
            flex: 1
        }}>
            <View style={styles.contenedorTitulo}>
                <Text style={styles.titulo}>Salcobrand</Text>
            </View>

            <View style={styles.contenedorBotones}>
                <View style={{ ...styles.contenedorFila, marginBottom: 30 }}>
                    <TouchableIcon iconName="file-tray-full-sharp" textBtn='Historial de Pedidos'></TouchableIcon>
                    <TouchableIcon iconName="gift-sharp" textBtn='Descuentos'></TouchableIcon>
                </View>

                <View style={styles.contenedorFila}>
                    <TouchableIcon iconName="bicycle-sharp" textBtn='Seguimiento de compra'></TouchableIcon>
                    <TouchableIcon iconName="medkit-sharp" textBtn='Asistencia'></TouchableIcon>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorTitulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0074C8'
    },
    titulo: {
        fontSize: 30,
        marginBottom: 10,
        color: 'white'
    },
    contenedorBotones: {
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: -30,
        left: 10
    },
    contenedorFila: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    }
});
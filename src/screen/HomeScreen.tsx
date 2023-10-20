import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colores, styles } from '../theme/AppTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const HomeScreen = () => {

    const {top} = useSafeAreaInsets();
    return (
        <View style={{ 
            marginTop: top,
            flex:1
        }}>
            <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colores.primary
            }}>
                <Text style={ {...styles.title, color: 'white', fontSize: 30}}>Salcobrand</Text>
            </View>

            <View style={{
                    flex:9,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: -30,
                    left: 10
                }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: 30
                }}>
                    <TouchableIcon iconName="file-tray-full-sharp" textBtn='Historial de Pedidos'></TouchableIcon>
                    <TouchableIcon iconName="gift-sharp" textBtn='Descuentos'></TouchableIcon>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <TouchableIcon iconName="bicycle-sharp" textBtn='Seguimiento de compra'></TouchableIcon>
                    <TouchableIcon iconName="medkit-sharp" textBtn='Asistencia'></TouchableIcon>
                </View>

            </View>
        </View>
    )
}
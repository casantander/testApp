import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { colores, styles } from '../theme/AppTheme'

interface Props extends DrawerScreenProps<any, any>{};

export const TiendaScreen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () =>
                <TouchableOpacity 
                style={{
                    marginLeft: 10
                }}
                onPress={() => { navigation.toggleDrawer()}}>
                    <Icon name="menu-outline" size={40} color='white'/>
                </TouchableOpacity>
        })
    }, [])

    useEffect(() => {
        navigation.setOptions({
            headerRight: () =>
                <View
                    style={{
                        flexDirection:'row',
                        marginRight: 15
                    }}
                >
                    <TouchableOpacity
                        style={{
                            marginLeft: 10
                        }}
                        onPress={() => { navigation.toggleDrawer() }}>
                        <Icon name="search-circle-sharp" size={40} color='white' />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            marginLeft: 10
                        }}
                        onPress={ () => navigation.navigate('CartShopScreen')}>
                        <Icon name="cart-sharp" size={40} color='white' />
                    </TouchableOpacity>
                </View>
        })
    }, [])
    
    return (
        <View style={ styles.globalMargin}>
            <Text style= {{
                marginVertical: 20,
                fontSize: 20,
                marginLeft: 5
            }}>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity 
                    style= {{ 
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6' 
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >
                    <Icon name="accessibility-outline" size={35} color='white'/>
                    <Text style= { styles.botonGrandeTexto }>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style= {{ 
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427' 
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}
                >
                    <Icon name="woman-outline" size={35} color='white'/>
                    <Text style= { styles.botonGrandeTexto }>Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
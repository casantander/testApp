import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, StyleSheet, Text, Button } from 'react-native'
import { styles } from '../theme/AppTheme'

export const CartShopScreen = () => {

    const navigator = useNavigation();

    useEffect(() => {
      navigator.setOptions({
        title: 'Regresar',
        headerBackTitle: 'Regresar'
      });
    
      
    }, [])
    

    return (
        <View style={ styles.globalMargin}>
            <Text style={ styles.title}>Pagina2Screen</Text>
        </View>
    )
}
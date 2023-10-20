import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext, AuthState } from '../context/AuthContext';
import { colores, styles } from '../theme/AppTheme';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    const {authState,authState: {favoriteIcon}} = useContext(AuthContext);

    return (
        <View style={{ marginTop: insets.top}}>
            <Text style={ {...styles.title, color: 'black'}}>Settings Screen</Text>

            <Text style={ {...styles.title, color: 'black', fontSize: 23}}>{JSON.stringify(authState, null, 4)}</Text>
            
            {
                favoriteIcon && (<Icon name={ favoriteIcon } size={80} color={ colores.primary } />)
            }
            
            
        </View>
    )
}
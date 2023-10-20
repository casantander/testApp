import React, { useContext } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/AppTheme'

export const AlbumsScreen = () => {

    const { logout, authState: {isLoggedIn}} = useContext(AuthContext);

    return (
        <View style={ styles.globalMargin}>
            <Text style={ {...styles.title, color: 'black', fontSize: 23}}>AlbumsScreen</Text>
            {
                isLoggedIn && (<Button title='Logout' onPress= { logout }/>)
            }
        </View>
    )
}
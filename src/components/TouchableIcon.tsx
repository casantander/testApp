import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    iconName: string;
    textBtn: string;
}

export const TouchableIcon = ({ iconName, textBtn }: Props) => {

    return (
        <View style={styles.contenedor} >
            <TouchableOpacity style={styles.boton} >
                <Icon name={iconName} size={30} color={'white'} />
            </TouchableOpacity>
            <Text style={styles.texto}>
                {textBtn}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        width: 150,
        height: 150
    },
    boton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#0074C8',
        height: 60,
        width: 60,
        borderRadius: 100
    },
    texto: {
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
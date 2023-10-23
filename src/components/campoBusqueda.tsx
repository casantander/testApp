import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebouncedValue } from '../hooks/useDebouncedValue';


interface Props {
    onDebounce: ( value: string ) => void;
}

export const SearchInput = ({ onDebounce }:Props) => {

    const [textValue, setTextValue] = useState('');

    const deboncedValue = useDebouncedValue( textValue );
    
    useEffect(() => {
        onDebounce(deboncedValue);
    }, [deboncedValue])

    return (
        <View style={{
            width: 240,
            height:45
        }}>
            <View style={ styles.textBackground }>

                <TextInput 
                    placeholderTextColor={ "grey" }
                    placeholder="¿Qué estás buscando?"
                    style={{ 
                        ...styles.textInput,
                        top: (Platform.OS === 'ios') ? 0 : 2,
                        color: 'black'
                    }}
                    autoCapitalize="none"
                    autoCorrect={ false }
                    value={ textValue }
                    onChangeText={ setTextValue }
                />
                <Icon name="search-sharp" size={35} color='#0074C8' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textBackground: {
        backgroundColor: 'white',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        fontSize: 18,
        width: 200,
        marginLeft: 10
    }
});
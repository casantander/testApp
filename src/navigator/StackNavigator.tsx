import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TiendaScreen } from '../screen/TiendaScreen';
import { CartShopScreen } from '../screen/CartShopScreen';
import { PersonaScreen } from '../screen/PersonaScreen';
import { colores } from '../theme/AppTheme';

export type RootStackParams = {
  TiendaScreen: undefined,
  CartShopScreen: undefined,
  PersonaScreen: { id: number, nombre: string},
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor: colores.primary,
        },
        cardStyle: {
          backgroundColor: 'white'
        },
        headerTintColor:'white'
        
      }}
    >
      <Stack.Screen name="TiendaScreen" options={{title:"Tienda"}} component={TiendaScreen} />
      <Stack.Screen name="CartShopScreen" options={{title:"Pagina 2"}} component={CartShopScreen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
}
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TiendaScreen } from '../screen/TiendaScreen';
import { CartShopScreen } from '../screen/CartShopScreen';
import { ProductScreen } from '../screen/ProductScreen';
import { Product } from '../context/ProductContext';

export type RootStackParams = {
  TiendaScreen: undefined,
  CartShopScreen: undefined,
  ProductScreen: { product: Product}
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor: '#0074C8',
        },
        cardStyle: {
          backgroundColor: 'white'
        },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="TiendaScreen" options={{ title: "Tienda" }} component={TiendaScreen} />
      <Stack.Screen name="CartShopScreen" options={{ title: "Pagina 2" }} component={CartShopScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}
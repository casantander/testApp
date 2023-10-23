
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralExp } from './src/navigator/MenuLateralExp';
import { ProductProvider } from './src/context/ProductContext';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateralExp />
      </AppState>
      
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ProductProvider>
      {children}
    </ProductProvider>
  )

}

export default App;
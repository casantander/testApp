
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { MenuLateralExp } from './src/navigator/MenuLateralExp';
import { AuthProvider } from './src/context/AuthContext';

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
    <AuthProvider>
      {children}
    </AuthProvider>
  )

}

export default App;
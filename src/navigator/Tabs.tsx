import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screen/HomeScreen';
import { StackNavigator } from './StackNavigator';
import { Platform} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS/> : <TabsAndroid/>
}

const  BottonTabAndroid = createMaterialBottomTabNavigator();
const BottonTabIOS = createBottomTabNavigator();

export const TabsAndroid = () => {

  return (
    <BottonTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: '#0074C8',
      }}
      activeColor="white"
      inactiveColor='white'
    >
      <BottonTabAndroid.Screen name="Inicio" options={{ title: "Inicio", tabBarIcon: (props) => <Icon name='home-sharp' size={20} color='white' />, }} component={HomeScreen} />
      <BottonTabAndroid.Screen name="Tienda" options={{ title: "Tienda", tabBarIcon: (props) => <Icon name='bag-handle-sharp' size={20} color='white' /> }} component={StackNavigator} />
    </BottonTabAndroid.Navigator>
  );
}

export const TabsIOS = () => {
  return (
    <BottonTabIOS.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={() => ({
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          backgroundColor: '#0074C8',
          height: 90
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarInactiveTintColor: 'white',
      })}

    >
      <BottonTabIOS.Screen name="Inicio" options={{ title: "Inicio", headerShown: false, tabBarIcon: (props) => <Icon name='home-sharp' size={20} color='white' /> }} component={HomeScreen} />
      <BottonTabIOS.Screen name="Tienda" options={{ title: "Tienda", headerShown: false, tabBarIcon: (props) => <Icon name='bag-handle-sharp' size={20} color='white' /> }} component={StackNavigator} />
    </BottonTabIOS.Navigator>
  );
}
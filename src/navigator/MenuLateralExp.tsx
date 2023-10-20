import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { Text, useWindowDimensions, View, Image } from 'react-native';
import { SettingsScreen } from '../screen/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { styles } from '../theme/AppTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateralExp = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={ (props) => <MenuInterno {...props} /> }
    >
      <Drawer.Screen options={{ headerStyle: { shadowColor: 'transparent', elevation: 0, }, headerShown: false}} name="Tabs" component={ Tabs } />
      <Drawer.Screen options={{ headerStyle: { shadowColor: 'transparent', elevation: 0, }, headerShown: false}} name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      <View style= {styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
          }}
          style= { styles.avatar }
        />
      </View>

      <View style={styles.menuContainer}>
          <TouchableOpacity style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
            onPress = { () => navigation.navigate('Tabs')}
          >
            <Icon name="compass-outline" size={23} color="black" />
            <Text style={styles.menuTexto}> Navegacion</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
            onPress = { () => navigation.navigate('SettingsScreen')}
          >
            <Icon name="cog-outline" size={23} color="black" />
            <Text style={styles.menuTexto}> Ajustes</Text>
          </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
}
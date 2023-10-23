import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { useWindowDimensions, View, Image, StyleSheet } from 'react-native';
import { Tabs } from './Tabs';
import { ProductsContext } from '../context/ProductContext';
import { ListaCategorias } from '../components/ListaCategorias';

const Drawer = createDrawerNavigator();

export const MenuLateralExp = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <MenuInterno {...props} />}>
      <Drawer.Screen options={{ headerStyle: { shadowColor: 'transparent', elevation: 0, }, headerShown: false }} name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
}

const MenuInterno = (props: DrawerContentComponentProps) => {

  const { productsState: { Categorias } } = useContext(ProductsContext);

  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Logo_Salcobrand.svg/981px-Logo_Salcobrand.svg.png'
          }}
          style={styles.avatar}
        />
      </View>
      <ListaCategorias categorias={Categorias} navigation={props.navigation} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  }
});
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddEventScreen from './screens/AddEventScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Mural Estrada do Macuco" component={HomeScreen} />
        <Stack.Screen name="Adicionar Evento" component={AddEventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
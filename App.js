// bibliotecas:
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

// telas:
import SliderScreen from './screens/Slider';
import HomeScreen from './screens/Home'

// navegação:
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importação de estilo:
import styles from './styles/Style';

// constante que inicializa a pilha de navegação:
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Slider"
          component={SliderScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

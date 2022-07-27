// bibliotecas:
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// telas:
import SliderScreen from './screens/Slider';
import HomeScreen from './screens/Home'

// constante que inicializa a pilha de navegação:
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Slider"
            component={SliderScreen}
            options={{headerShown: false}}
          />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

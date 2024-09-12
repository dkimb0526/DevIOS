import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1'; // Your main screen with the image
import Screen2 from './Screen2'; // Your main screen with the image

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="s1" component={Screen1} />
        <Stack.Screen name="s2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

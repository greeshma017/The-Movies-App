import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesScreen from '../screens/MoviesScreen';

const Stack = createNativeStackNavigator();

const MoviesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movie List" component={MoviesScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default MoviesStack;
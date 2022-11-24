import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyContext from './MyContext';
import Card from './Card';
import Rules from './Rules';
import {useColorScheme} from 'react-native';

const Stack = createNativeStackNavigator();

const NavigationModel = () => {
  const colorScheme = useColorScheme() === 'light';
  console.log(colorScheme);
  return (
    <MyContext.Provider value={colorScheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Card"
            component={Card}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Rules"
            component={Rules}
            options={{presentation: 'modal', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
};

export default NavigationModel;

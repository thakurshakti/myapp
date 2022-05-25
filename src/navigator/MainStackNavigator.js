/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import MyTabs from './BottomTabNavigator';
const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator >
        <MainStack.Screen
          options={{headerShown: false}}
          name="Tabs"
          component={MyTabs}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;

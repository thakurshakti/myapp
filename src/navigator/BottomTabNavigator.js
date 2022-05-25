/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListenNowScreen from '../components/ListenNow';
import LibraryScreen from '../components/LibraryScreen';
import SearchScreen from '../components/SearchScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="ListenNow" component={ListenNowScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </>
  );
}
export default MyTabs;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClockScreen from './components/Clock';
import {MyStopwatch} from './components/Stopwatch';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Clock" component={ClockScreen} />
        <Tab.Screen name="Stopwatch" component={MyStopwatch} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


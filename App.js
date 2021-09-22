import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './styles'
import ClockScreen from './components/Clock';
import {MyStopwatch} from './components/Stopwatch';


const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

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


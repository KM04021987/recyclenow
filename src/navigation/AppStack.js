import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import { AuthContext } from './AuthProvider';


const Stack = createStackNavigator();


const AppStack = () => {
  const { usertype, setUserType } = useContext(AuthContext);
  let routeName;

  switch (usertype) {
    case 'D':
      routeName = 'Home'
      break
    case 'R':
      routeName = 'Home'
      break
    case ' ':
    case '':
    default:
      console.log(`Nothing`);
      break
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
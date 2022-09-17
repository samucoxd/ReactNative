import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();


const BottomTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name = 'HomeScreen' component={HomeScreen}/>
			<Tab.Screen name = 'Profile' component={Profile}/>
		</Tab.Navigator>
	)
}

export default BottomTab
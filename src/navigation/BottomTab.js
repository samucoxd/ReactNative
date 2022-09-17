import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
	return (
		<Tab.Navigator
			initialRouteName='HomeScreen'
			screenOptions={{
				tabBarActiveTintColor:'purple',
			}}
		>
			<Tab.Screen 
				name = 'HomeScreen' 
				component={HomeScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({color, size})=>(
						<Icon name="home-outline" color={color} size={size} />
					),
				}}	
			/>
			<Tab.Screen 
				name = 'Profile' 
				component={Profile}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({color, size})=>(
						<Icon name="account" color={color} size={size} />
					),
				}}	
			/>
		</Tab.Navigator>
	)
}

export default BottomTab
import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStackNavigator from './homeStackNavigator';
import { colors } from '@constants';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
	return (
		<Drawer.Navigator
			initialRouteName="HomeStack"
			screenOptions={{
				headerShown: false,
				drawerActiveBackgroundColor: '#fff',
				drawerStyle: {
					backgroundColor: colors.blue,
					padding: 0,
				},
				drawerInactiveTintColor: '#000',
				drawerLabelStyle: {
					fontSize: 16,
				},
			}}
		>
			<Drawer.Screen
				name="HomeStack"
				component={HomeStackNavigator}
				options={{
					title: 'Home',
					drawerIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen name="Test" component={Test} />
		</Drawer.Navigator>
	);
}

const Test = () => {
	return <Text>View</Text>;
};

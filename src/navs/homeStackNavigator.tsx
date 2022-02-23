import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, RequestScreen, DestinationScreen } from '@screens';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Request" component={RequestScreen} />
			<Stack.Screen name="Destination" component={DestinationScreen} />
		</Stack.Navigator>
	);
}

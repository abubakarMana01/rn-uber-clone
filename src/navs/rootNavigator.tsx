import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import navigationTheme from './navigationTheme';
import DrawerNavigator from './drawerNavigator';

export default function RootNavigator() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<DrawerNavigator />
		</NavigationContainer>
	);
}

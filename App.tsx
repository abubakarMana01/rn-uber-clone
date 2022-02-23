import 'react-native-gesture-handler';
import React from 'react';

import RootNavigator from '@navs/rootNavigator';
import AppProvider from '@contexts/appProvider';

const App = () => {
	return (
		<>
			<AppProvider>
				<RootNavigator />
			</AppProvider>
		</>
	);
};

export default App;

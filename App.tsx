import 'react-native-gesture-handler';
import React from 'react';

import { RootNavigator } from '@navs';
import { AppProvider } from '@contexts';

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

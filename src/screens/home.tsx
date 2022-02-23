import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import {
	HomeHeader,
	HomeMap,
	HomeRideCategories,
	HomeSearch,
} from '@components';
import { colors } from '@constants';

export default function Home() {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<StatusBar backgroundColor={colors.darkBlue} barStyle="light-content" />

				<HomeHeader />

				<View style={styles.main}>
					<HomeRideCategories />
					<HomeSearch />
					<HomeMap />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	main: {
		marginHorizontal: 15,
	},
});

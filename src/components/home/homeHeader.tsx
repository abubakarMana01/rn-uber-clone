import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
	NavigationProp,
	ParamListBase,
	useNavigation,
} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import colors from '@constants/colors';

export default function HomeHeader() {
	const navigation = useNavigation<NavigationProp<ParamListBase>>();

	return (
		<View style={styles.header}>
			<Feather
				name="menu"
				onPress={navigation.openDrawer}
				size={40}
				color={colors.white}
			/>

			<Text style={styles.headerTitle}>Destress your commute</Text>

			<Text style={styles.subTitle}>
				{'Read a book. Take a nap. Stare out of the \nwindow'}
			</Text>

			<TouchableOpacity
				style={styles.headerButton}
				onPress={() => navigation.navigate('Request')}
			>
				<Text style={styles.headerButtonText}>Ride with Uber</Text>
			</TouchableOpacity>

			<View style={styles.headerBottomImage}>
				<Image source={require('@assets/uberCar.png')} resizeMode="contain" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: colors.blue,
		minHeight: 200,
		padding: 15,
	},
	headerTitle: {
		color: colors.white,
		fontSize: 24,
		marginVertical: 20,
	},
	subTitle: {
		color: colors.white,
		fontSize: 16,
		marginBottom: 20,
	},
	headerButton: {
		height: 45,
		width: 150,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.black,
		marginBottom: 10,
	},
	headerButtonText: {
		color: colors.white,
		fontSize: 16,
	},
	headerBottomImage: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		zIndex: -1,
	},
});

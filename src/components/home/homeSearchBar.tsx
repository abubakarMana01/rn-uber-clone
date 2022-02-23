import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
	NavigationProp,
	ParamListBase,
	useNavigation,
} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '@constants/colors';

export default function HomeSearchBar() {
	const navigation = useNavigation<NavigationProp<ParamListBase>>();

	return (
		<Pressable
			style={styles.container}
			onPress={() => navigation.navigate('Request')}
		>
			<Text style={styles.searchText}>Where to?</Text>
			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={() => navigation.navigate('Request')}
			>
				<MaterialCommunityIcons name="clock" size={25} color={colors.black} />
				<Text style={styles.buttonText}>Now</Text>
				<MaterialCommunityIcons
					name="chevron-down"
					size={25}
					color={colors.black}
				/>
			</TouchableOpacity>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightGrey,
		paddingVertical: 10,
		paddingHorizontal: 15,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
	buttonContainer: {
		backgroundColor: colors.white,
		padding: 10,
		borderRadius: 50,
		flexDirection: 'row',
		alignItems: 'center',
	},
	searchText: {
		fontSize: 22,
		color: colors.black,
		fontWeight: '500',
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		marginHorizontal: 10,
		color: colors.black,
	},
});

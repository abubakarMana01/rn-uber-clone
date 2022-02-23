import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '@constants/colors';
import HomeSearchBar from './homeSearchBar';

export default function HomeSearch() {
	return (
		<View style={styles.container}>
			<HomeSearchBar />

			<View style={styles.locationSelectContainer}>
				<TouchableOpacity style={styles.location}>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons
							name="map-marker"
							size={24}
							color={colors.black}
						/>
					</View>

					<View style={styles.locationTextContainer}>
						<Text numberOfLines={1} style={styles.addressLine1}>
							I.V.W Osisogu Crescent
						</Text>
						<Text numberOfLines={1} style={styles.addressLine2}>
							Utako, Abuja
						</Text>
					</View>

					<MaterialCommunityIcons
						name="chevron-right"
						size={30}
						color={colors.grey}
					/>
				</TouchableOpacity>

				<TouchableOpacity style={[styles.location, styles.removeBorder]}>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons
							name="map-marker"
							size={24}
							color={colors.black}
						/>
					</View>

					<View style={styles.locationTextContainer}>
						<Text numberOfLines={1} style={styles.addressLine1}>
							Nile University of Nigeria
						</Text>
						<Text numberOfLines={1} style={styles.addressLine2}>
							Plot 681, Cadastal Zone C-00, Research Area, Jabi, Abuja
						</Text>
					</View>

					<MaterialCommunityIcons
						name="chevron-right"
						size={30}
						color={colors.grey}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	locationSelectContainer: {},
	location: {
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: colors.lightGrey,
		borderBottomWidth: 1.5,
		paddingVertical: 25,
	},
	removeBorder: {
		borderBottomWidth: 0,
	},
	iconContainer: {
		width: 40,
		height: 40,
		backgroundColor: colors.lightGrey,
		borderRadius: 20,
		marginRight: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	locationTextContainer: {
		flex: 1,
	},
	addressLine1: {
		fontSize: 18,
		fontWeight: '500',
		color: colors.black,
	},
	addressLine2: {
		fontSize: 14,
		color: colors.mediumGrey,
	},
});

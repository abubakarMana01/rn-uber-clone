import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '@constants/colors';

type LocationSearchRowProps = {
	data: { description: string; vicinity?: string };
};

const DestinationSearchLocationsRow: React.FC<LocationSearchRowProps> = ({
	data,
}) => {
	return (
		<View style={styles.locationRow}>
			<View style={[styles.locationIconContainer]}>
				{data.description === 'Home' ? (
					<Ionicons name="home-outline" color={colors.black} size={24} />
				) : data.description === 'Work' ? (
					<Ionicons name="briefcase-outline" color={colors.black} size={24} />
				) : (
					<Ionicons name="location" color={colors.black} size={24} />
				)}
			</View>
			<Text style={styles.locationText}>
				{data.description || data.vicinity}
			</Text>
		</View>
	);
};

export default DestinationSearchLocationsRow;

const styles = StyleSheet.create({
	locationRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	locationIconContainer: {
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 8,
	},
	locationText: {
		color: colors.black,
	},
});

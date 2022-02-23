import {
	Image,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
	NavigationProp,
	ParamListBase,
	useNavigation,
} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '@constants';
import { GooglePlacesInput } from '@components';

export default function Request() {
	const navigation = useNavigation<NavigationProp<ParamListBase>>();

	const [userPickup, setUserPickup] = useState<{} | null>(null);
	const [userDestination, setUserDestination] = useState<{} | null>(null);

	useEffect(() => {
		if (userPickup && userDestination) {
			navigation.navigate('Destination', {
				userPickup,
				userDestination,
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userPickup, userDestination]);

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={colors.black} />
			{/* <RequestScreenMap /> */}

			<View style={styles.topContainer}>
				<View style={styles.header}>
					<TouchableOpacity style={styles.backIcon} onPress={navigation.goBack}>
						<MaterialCommunityIcons
							name="arrow-left"
							color={colors.black}
							size={35}
						/>
					</TouchableOpacity>

					<View style={styles.selectRiderContainer}>
						<Ionicons name="person-circle" color={colors.grey} size={30} />
						<Text style={styles.rider}>For someone</Text>
						<MaterialCommunityIcons
							style={styles.chevronIcon}
							name="chevron-down"
							size={24}
							color={colors.black}
						/>
					</View>
				</View>

				<View style={styles.searchContainer}>
					<Image
						style={styles.leftTransityImage}
						source={require('@assets/transit.png')}
						resizeMode="contain"
					/>

					<View style={styles.searchBoxes}>
						<GooglePlacesInput
							placeholder="Enter pick-up location"
							setLocationDetails={setUserPickup}
						/>

						<GooglePlacesInput
							placeholder="Where to?"
							variant="secondary"
							setLocationDetails={setUserDestination}
						/>
					</View>

					<View style={styles.rightPlusIconContainer}>
						<MaterialCommunityIcons
							name="plus-thick"
							size={25}
							color={colors.black}
						/>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topContainer: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 15,
	},
	backIcon: {
		position: 'absolute',
		left: 0,
		marginHorizontal: 15,
		marginVertical: 15,
	},
	selectRiderContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		top: -5,
	},
	rider: {
		color: colors.black,
		fontSize: 16,
		fontWeight: '700',
		marginLeft: 5,
	},
	chevronIcon: {
		top: 1,
	},

	leftTransityImage: {
		height: 80,
		top: 10,
	},
	searchContainer: {
		paddingLeft: 10,
		paddingRight: 15,
		paddingBottom: 10,
		flexDirection: 'row',
	},
	searchBoxes: {
		marginLeft: 5,
		flex: 1,
		justifyContent: 'space-between',
	},
	rightPlusIconContainer: {
		alignSelf: 'flex-start',
		marginBottom: 10,
		marginLeft: 5,
		top: 67.5,
	},
});

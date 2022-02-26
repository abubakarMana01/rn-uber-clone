import React, { useCallback, useMemo, useRef } from 'react';
import {
	Dimensions,
	Image,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {
	NavigationProp,
	ParamListBase,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import BottomSheet, {
	BottomSheetFooter,
	BottomSheetSectionList,
} from '@gorhom/bottom-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '@constants';
import { RequestScreenMap } from '@components';

import { carTypeData } from '@assets/data';

export default function ConfirmRequest() {
	const navigation = useNavigation<NavigationProp<ParamListBase>>();
	const route = useRoute<any>();

	const { userPickup, userDestination } = route.params;

	const bottomSheetRef = useRef<BottomSheet>(null);

	const snapPoints = useMemo(() => [400, '90%'], []);

	const handleSheetChanges = useCallback(() => {}, []);

	const sections = useMemo(
		() =>
			carTypeData.map(array => ({
				title: array.title,
				data: array.data,
			})),
		[]
	);

	const renderSectionHeader = useCallback(
		({ section }) => (
			<View style={styles.sectionHeaderContainer}>
				<Text style={styles.sectionHeaderText}>{section.title}</Text>
			</View>
		),
		[]
	);

	const renderItem = useCallback(({ item: ride }) => {
		return (
			<View style={styles.itemContainer}>
				<Image
					style={styles.rideVehicleImageContainer}
					resizeMode="contain"
					source={ride.image}
				/>

				<View style={styles.rideDetails}>
					<View style={styles.rideClassContainer}>
						<Text style={styles.rideClass}>{ride.name}</Text>

						<Ionicons
							style={styles.rideGroupIcon}
							name="person"
							size={12}
							color={colors.black}
						/>
						<Text style={styles.rideGroup}>{ride.group}</Text>
					</View>

					<Text style={styles.rideTime}>{ride.time}</Text>
					<Text style={styles.rideNote}>{ride.note}</Text>
				</View>

				<View style={styles.ridePriceContainer}>
					<View style={styles.ridePriceTop}>
						<MaterialCommunityIcons name="tag" color="green" size={14} />
						<Text style={styles.ridePrice}>{`$${
							Number(ride.price).toFixed(2) || Number(ride.promotion).toFixed(2)
						}`}</Text>
					</View>
					<Text style={styles.ridePromotion}>
						{ride.promotion !== 0 && `$${Number(ride.promotion).toFixed(2)}`}
					</Text>
				</View>
			</View>
		);
	}, []);

	const listHeaderComponent = useCallback(
		() => (
			<Text style={styles.headerText}>Choose a ride or scroll up for more</Text>
		),
		[]
	);

	const renderFooter = useCallback(
		props => (
			<BottomSheetFooter {...props} bottomInset={0}>
				<View style={styles.footerContainer}>
					<Pressable style={styles.confirmRideButton}>
						<Text style={styles.confirmRideText}>Confirm UberX</Text>
					</Pressable>
				</View>
			</BottomSheetFooter>
		),
		[]
	);

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backIcon} onPress={navigation.goBack}>
				<MaterialCommunityIcons
					name="arrow-left"
					color={colors.black}
					size={35}
				/>
			</TouchableOpacity>

			<View style={styles.mapContainer}>
				<RequestScreenMap
					origins={{
						pickup: userPickup,
						destination: userDestination,
					}}
				/>
			</View>

			<BottomSheet
				ref={bottomSheetRef}
				index={0}
				snapPoints={snapPoints}
				onChange={handleSheetChanges}
				footerComponent={renderFooter}
			>
				<BottomSheetSectionList
					sections={sections}
					renderSectionHeader={renderSectionHeader}
					renderItem={renderItem}
					ListHeaderComponent={listHeaderComponent}
					contentContainerStyle={styles.contentContainer}
					ListFooterComponent={() => <View />}
					ListFooterComponentStyle={styles.listFooterComponent}
				/>
			</BottomSheet>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	backIcon: {
		position: 'absolute',
		backgroundColor: colors.white,
		borderRadius: 20,
		zIndex: 1,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		top: 15,
		left: 15,
	},
	mapContainer: {
		height: Dimensions.get('window').height * 0.6,
		backgroundColor: colors.grey,
	},
	contentContainer: {
		paddingHorizontal: 15,
	},
	sectionHeaderContainer: {
		marginBottom: 5,
	},
	sectionHeaderText: {
		fontSize: 20,
		color: colors.black,
		fontWeight: '700',
	},
	headerText: {
		textAlign: 'center',
	},

	itemContainer: {
		flexDirection: 'row',
		paddingVertical: 10,
	},
	rideVehicleImageContainer: {
		width: 60,
		height: 60,
	},
	rideDetails: {
		flex: 1,
		marginHorizontal: 10,
	},
	rideClassContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	rideClass: {
		fontSize: 16,
		fontWeight: '700',
		color: colors.black,
	},
	rideGroup: {
		fontSize: 14,
		fontWeight: '700',
		marginLeft: 3,
		color: colors.black,
	},
	rideGroupIcon: {
		marginLeft: 5,
	},
	rideTime: {
		fontSize: 14,
		color: colors.darkGrey,
	},
	rideNote: {
		fontSize: 14,
		color: colors.darkGrey,
		fontWeight: '500',
	},
	ridePriceContainer: {
		alignItems: 'flex-end',
		flex: 0.27,
	},
	ridePriceTop: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	ridePrice: {
		fontSize: 16,
		fontWeight: '700',
		color: colors.black,
		marginLeft: 3,
	},
	ridePromotion: {
		fontSize: 14,
		color: colors.darkGrey,
		textDecorationLine: 'line-through',
	},

	footerContainer: {
		paddingHorizontal: 15,
		paddingBottom: 10,
		paddingTop: 20,
		borderRadius: 12,
		backgroundColor: colors.white,
	},
	footerText: {
		textAlign: 'center',
	},
	confirmRideButton: {
		backgroundColor: colors.black,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		height: 50,
	},
	confirmRideText: {
		color: colors.white,
		fontSize: 16,
		fontWeight: '600',
	},
	listFooterComponent: {
		height: 80,
	},
});

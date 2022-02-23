import React, { Dispatch, SetStateAction, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '@env';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '@constants/colors';
import LocationSearchRow from '@components/request/locationSearchRow';

navigator.geolocation = require('react-native-geolocation-service');

type GooglePlacesInputProps = {
	placeholder: string;
	variant?: 'default' | 'secondary';
	setLocationDetails: Dispatch<SetStateAction<null | {}>>;
};

export default function GooglePlacesInput({
	placeholder,
	variant = 'default',
	setLocationDetails,
}: GooglePlacesInputProps) {
	const mapRef = useRef<any>();

	const homePlace = {
		description: 'Home',
		geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
	};
	const workPlace = {
		description: 'Work',
		geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
	};

	return (
		<GooglePlacesAutocomplete
			ref={mapRef}
			placeholder={placeholder}
			nearbyPlacesAPI="GooglePlacesSearch"
			listViewDisplayed="auto"
			enablePoweredByContainer={false}
			currentLocation={true}
			currentLocationLabel="Current Location"
			fetchDetails={true}
			debounce={400}
			minLength={2}
			predefinedPlaces={[homePlace, workPlace]}
			query={{
				key: GOOGLE_API_KEY,
				language: 'en',
				// components: 'country:ng',
			}}
			onPress={(data, details = null) => {
				// 'details' is provided when fetchDetails = true
				// console.log(details?.geometry.location);
				setLocationDetails({
					latitude: details?.geometry.location.lat,
					longitude: details?.geometry.location.lng,
				});
			}}
			styles={{
				textInput: [
					styles.textInput,
					{
						backgroundColor:
							variant === 'secondary' ? '#F2f9f9' : colors.lightGrey,
					},
				],
				separator: styles.separator,
				row: styles.row,
				listView: {
					position: 'absolute',
					top: variant === 'secondary' ? 40 : 100,
				},
				container: {
					position: variant === 'secondary' ? 'absolute' : 'relative',
					top: variant === 'secondary' ? 60 : 0,
					width: '100%',
				},
				loader: styles.loader,
			}}
			renderRow={data => <LocationSearchRow data={data} />}
			renderRightButton={() => (
				<View
					style={[
						styles.customRightClearButton,
						// eslint-disable-next-line react-native/no-inline-styles
						{
							backgroundColor:
								variant === 'secondary' ? '#F2f9f9' : colors.lightGrey,
						},
					]}
				>
					<TouchableOpacity onPress={() => mapRef.current?.setAddressText('')}>
						<MaterialIcons name="cancel" size={20} color={colors.grey} />
					</TouchableOpacity>
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	textInput: {
		height: 40,
		color: colors.black,
		borderColor: colors.grey,
		paddingRight: 15,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	},
	separator: {
		height: 0,
	},
	row: {
		padding: 0,
	},
	loader: {
		alignSelf: 'center',
		height: 25,
	},
	customRightClearButton: {
		justifyContent: 'center',
		marginBottom: 5,
		paddingHorizontal: 5,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
	},
});

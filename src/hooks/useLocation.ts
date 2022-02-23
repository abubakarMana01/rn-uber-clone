import { useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default function useLocation() {
	const [currentLocation, setCurrentLocation] = useState<{
		latitude: number;
		longitude: number;
	} | null>(null);

	async function getPermission() {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			{
				title: 'Location Permission',
				message: 'App needs access to your location',
				buttonPositive: 'Yes',
				buttonNegative: 'No',
				buttonNeutral: 'Later',
			}
		);

		if (granted) {
			Geolocation.watchPosition(
				position => {
					const { latitude, longitude } = position.coords;
					setCurrentLocation({ latitude, longitude });
				},
				error => {
					console.log(error);
				},
				{
					enableHighAccuracy: true,
					distanceFilter: 0,
					interval: 5000,
					fastestInterval: 2000,
				}
			);
		}
	}

	return { currentLocation, getPermission };
}

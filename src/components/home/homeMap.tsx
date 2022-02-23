import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import colors from '@constants/colors';
import { carsAround } from '@assets/data';
import { mapStyle } from '@assets/mapStyle';
import { useAppContext } from '@contexts/appProvider';

export default function HomeMap() {
	const appContext = useAppContext();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Around you</Text>

			<View style={styles.mapContainer}>
				{appContext?.location && (
					<MapView
						provider={PROVIDER_GOOGLE}
						style={styles.map}
						customMapStyle={mapStyle}
						showsUserLocation={true}
						followsUserLocation={true}
						initialRegion={{
							longitude: appContext.location.longitude,
							latitude: appContext.location.latitude,
							latitudeDelta: 0.0122,
							longitudeDelta: 0.0071,
						}}
					>
						{carsAround.map((item, index) => (
							<Marker coordinate={item} key={index.toString()}>
								<Image
									resizeMode="contain"
									style={styles.carMarker}
									source={require('@assets/carMarker.png')}
								/>
							</Marker>
						))}
					</MapView>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	title: {
		fontSize: 22,
		fontWeight: '600',
		color: colors.black,
	},
	mapContainer: {
		backgroundColor: colors.lightGrey,
		height: 200,
		marginVertical: 20,
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	carMarker: {
		width: 35,
	},
});

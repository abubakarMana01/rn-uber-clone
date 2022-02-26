import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from '@env';

import { mapStyle } from '@assets/mapStyle';
import { colors } from '@constants';

type MapProps = {
	origins: {
		destination: { latitude: number; longitude: number };
		pickup: { latitude: number; longitude: number };
	};
};

const Map: React.FC<MapProps> = ({ origins }) => {
	const mapRef = useRef<MapView | null>(null);
	useEffect(() => {
		setTimeout(() => {
			mapRef.current?.fitToCoordinates([origins.pickup, origins.destination], {
				edgePadding: { top: 100, right: 50, left: 50, bottom: 100 },
				animated: true,
			});
		}, 500);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<MapView
			ref={mapRef}
			provider={PROVIDER_GOOGLE}
			style={styles.map}
			customMapStyle={mapStyle}
		>
			<Marker coordinate={origins.pickup} anchor={{ x: 0.5, y: 0.5 }}>
				<Image
					resizeMode="contain"
					style={styles.marker}
					source={require('@assets/location.png')}
				/>
			</Marker>

			<Marker coordinate={origins.destination} anchor={{ x: 0.5, y: 0.5 }}>
				<Image
					resizeMode="contain"
					style={[styles.marker, styles.markerRound]}
					source={require('@assets/location.png')}
				/>
			</Marker>

			<MapViewDirections
				origin={origins.pickup}
				destination={origins.destination}
				apikey={GOOGLE_API_KEY}
				strokeWidth={4}
				strokeColor={colors.black}
			/>
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	},
	marker: {
		width: 15,
		height: 15,
	},
	markerRound: {
		borderRadius: 20,
	},
});

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '@constants/colors';

export default function HomeRideCategories() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.category}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={require('@assets/ride.png')} />
				</View>
				<Text style={styles.title}>Ride</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.category}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={require('@assets/food.png')} />
				</View>
				<Text style={styles.title}>Food</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.category}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={require('@assets/package.png')} />
				</View>
				<Text style={styles.title}>Package</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.category}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={require('@assets/reserve.png')} />
				</View>
				<Text style={styles.title}>Reserve</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
	},
	category: {
		alignItems: 'center',
	},
	imageContainer: {
		width: 70,
		height: 70,
		overflow: 'hidden',
		borderRadius: 13,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	title: {
		color: colors.black,
		fontWeight: '600',
	},
});

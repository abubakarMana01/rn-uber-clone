export const filterData = [
	{ name: 'Ride', image: require('@assets/ride.png'), id: '0' },
	{ name: 'Food', image: require('@assets/food.png'), id: '1' },
	{ name: 'Package', image: require('@assets/package.png'), id: '2' },
	{ name: 'Reserve', image: require('@assets/reserve.png'), id: '3' },
];

export const rideData = [
	{ street: '32 Olivia Rd', area: 'Klipfontein 83-Ir,Boksburg', id: '0' },
	{ street: 'Hughes Industrial Park', area: 'Hughes,Boksburg', id: '1' },
	{
		street: '32 Olivia Road',
		area: ' East Rand,Ekurhuleni,Gauteng,1459',
		id: '2',
	},
	{ street: 'Total Boksburg', area: '35 Atlas Rd,Anderbolt,Boksburg', id: '3' },
	{ street: '179 8th Ave', area: 'Bezuidenhout Valley,Johannesburg', id: '4' },
];

export const carTypeData = [
	{
		title: 'Popular',
		data: [
			{
				name: 'Uber Go',
				group: 2,
				price: 7,
				image: require('@assets/uberGo.png'),
				note: 'Affordable.compact rides',
				promotion: 5,
				time: '20:19',
				id: '0',
			},
			{
				name: 'UberX',
				group: 3,
				price: 5.5,
				image: require('@assets/uberX.png'),
				note: 'Affordable everyday trips',
				promotion: 0,
				time: '20:20',
				id: '1',
			},
			{
				name: 'Connect',
				group: 0,
				price: 12.6,
				image: require('@assets/uberConnect.png'),
				note: 'Send and receive packages',
				promotion: 10,
				time: '20:33',
				id: '2',
			},
		],
	},

	{
		title: 'Premium',
		data: [
			{
				name: 'Black',
				group: 3,
				price: 17.4,
				image: require('@assets/uberBlack.png'),
				note: 'Premium trips in luxury cars',
				promotion: 0,
				time: '20:31',
				id: '3',
			},
			{
				name: 'Van',
				group: 6,
				price: 22.3,
				image: require('@assets/uberVan.png'),
				note: 'Rides for groups up to 6',
				promotion: 12,
				time: '20:31',
				id: '4',
			},
		],
	},

	{
		title: 'More',
		data: [
			{
				name: 'Assist',
				group: 3,
				price: 35.3,
				image: require('@assets/uberAssist.png'),
				note: 'Special assistance from certified drivers',
				promotion: 26,
				time: '20:25',
				id: '5',
			},
		],
	},
];

export const requestData = [
	{
		name: 'For Me',
		id: 0,
	},
	{
		name: 'For Someone',
		id: 1,
	},
];

export const rideOptions = [
	{ name: 'Personal', icon: 'account', id: '0' },
	{ name: 'Business', icon: 'briefcase', id: '1' },
];

export const paymentOptions = [
	{ image: require('@assets/visaIcon.png'), text: 'Visa ...0476' },
	{ image: require('@assets/cashIcon.png'), text: 'Cash' },
];

export const availableServices = [
	'Uber Go',
	'UberX',
	'Uber connect',
	'Uber Black',
	'Uber Van',
	'Uber Assist',
];

export const carsAround = [
	{ latitude: 9.065468, longitude: 7.438458 },
	{ latitude: 9.063307, longitude: 7.43805 },
	{ latitude: 9.066358, longitude: 7.43951 },
	{ latitude: 9.063625, longitude: 7.441378 },
	{ latitude: 9.065246, longitude: 7.431624 },
	{ latitude: 9.067577, longitude: 7.426084 },
	{ latitude: 9.065755, longitude: 7.433294 },
	{ latitude: 9.059445, longitude: 7.435613 },
	{ latitude: 9.054609, longitude: 7.438189 },
	{ latitude: 9.059313, longitude: 7.443643 },
	{ latitude: 9.057915, longitude: 7.447465 },
	{ latitude: 9.061644, longitude: 7.443944 },
	{ latitude: 9.058847, longitude: 7.443085 },
	{ latitude: 9.061101, longitude: 7.43225 },
];

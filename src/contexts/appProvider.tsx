import React, { createContext, useContext, useEffect, useState } from 'react';

import useLocation from '@hooks/useLocation';

interface AppContextInterface {
	location: { longitude: number; latitude: number } | null;
	setLocation: (location: { longitude: number; latitude: number }) => void;
}

const AppContext = createContext<AppContextInterface | null>(null);

export default function AppProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [location, setLocation] =
		useState<AppContextInterface['location']>(null);

	const { getPermission, currentLocation } = useLocation();

	useEffect(() => {
		getPermission();
		setLocation(currentLocation);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentLocation?.latitude, currentLocation?.longitude]);

	return (
		<AppContext.Provider value={{ location, setLocation }}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error('useAppContext must be used within a AppProvider');
	}
	return context;
}

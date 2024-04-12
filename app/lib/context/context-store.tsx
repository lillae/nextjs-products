'use client';

import {
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
} from 'firebase/auth';

import { auth } from '@/config/firebase';
import firebase from 'firebase/compat/app';

import {
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from 'react';

import { IProduct } from '@/lib/types/definitions';

type ContextProps = {
	cart: IProduct[];
	setCart: Dispatch<SetStateAction<IProduct[]>>;
	user: string | null;
	setUser: Dispatch<SetStateAction<string>>;
	googleSignIn: () => void;
	logOut: () => void;
};

const GlobalContext = createContext<ContextProps>({
	cart: [],
	setCart: (cart) => {},
	user: '',
	setUser: () => '',
	googleSignIn: () => null,
	logOut: () => null,
});

export const GlobalContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [cart, setCart] = useState<IProduct[]>([]);
	const [user, setUser] = useState<any>();

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	};

	const logOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, [user]);

	const values = {
		cart,
		setCart,
		user,
		setUser,
		googleSignIn,
		logOut,
	};
	return (
		<GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
	);
};
export const useGlobalContext = () => useContext(GlobalContext);

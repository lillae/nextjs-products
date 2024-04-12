'use client';

import { useEffect, Dispatch, SetStateAction } from 'react';
import { useGlobalContext } from '@/lib/context/context-store';

type TotalPrice = {
	totalPrice: number;
	setTotalPrice: Dispatch<SetStateAction<number>>;
};

const TotalPrice = ({ setTotalPrice, totalPrice }: TotalPrice) => {
	const { cart } = useGlobalContext();

	useEffect(() => {
		const total = cart.reduce((a, b) => a + b.price, 0);
		setTotalPrice(total);
	}, []);

	return (
		<p className='text-2xl'>
			Total: <strong>$ {totalPrice}</strong>
		</p>
	);
};

export default TotalPrice;

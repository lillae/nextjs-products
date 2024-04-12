'use client';

import { useState } from 'react';

import TotalPrice from './total-price';
import CartItems from './cart-items';
import SuccessMessage from './success-message';
import ButtonPrimary from '@/ui/common/buttons/button-primary';
import TitleOne from '@/ui/common/titles/title-one';
import { useGlobalContext } from '@/lib/context/context-store';

const Cart = () => {
	const { cart, setCart, googleSignIn, user } = useGlobalContext();
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [purchased, setPurchased] = useState<boolean>(false);

	const handleSignIn = async () => {
		try {
			await googleSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	const handlePurchase = () => {
		setPurchased(true);
		setCart([]);
		setTotalPrice(0);
		setTimeout(() => {
			setPurchased(false);
		}, 2500);
	};

	return (
		<div className='max-w-wrapper w-full mx-auto flex flex-col gap-[50px] pb-[50px]'>
			<div className='w-full lg:w-[65%] flex flex-col gap-[50px]'>
				<TitleOne>Shopping Cart</TitleOne>
				<div className='w-full h-px bg-star-light'></div>
				<div>
					{cart.length === 0 ? (
						<p>Your cart is empty.</p>
					) : (
						<CartItems cart={cart} />
					)}
				</div>
			</div>
			<div className='self-end flex flex-col items-end lg:items-center gap-6'>
				<TotalPrice totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
				<ButtonPrimary onClick={!user ? handleSignIn : handlePurchase}>
					Purchase
				</ButtonPrimary>
				{purchased && <SuccessMessage />}
			</div>
		</div>
	);
};

export default Cart;

'use client';

import Link from 'next/link';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';

import { useGlobalContext } from '@/lib/context/context-store';

const CartIcon = () => {
	const { cart } = useGlobalContext();

	return (
		<div className='flex'>
			<Link href='/cart' aria-label='Shopping Cart'>
				<PiShoppingCartSimpleBold className='text-primary text-3xl' />
			</Link>
			<div className='w-[22px] h-[22px] rounded-full border-[2px] border-accent bg-accent text-white flex items-center justify-center mt-[15px] -ml-[2px]'>
				<span className='font-medium text-sm'>{cart.length}</span>
			</div>
		</div>
	);
};

export default CartIcon;

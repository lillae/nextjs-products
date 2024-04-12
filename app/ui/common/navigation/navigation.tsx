'use client';

import CartIcon from '@/ui/cart/cart-icon';
import { useGlobalContext } from '@/lib/context/context-store';

const Navigation = () => {
	const { logOut, user } = useGlobalContext();

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<nav className='w-full'>
			<div className='max-w-wrapper w-full mx-auto flex items-center justify-end h-[50px] px-4 xl:p-0 gap-6'>
				{user && (
					<button onClick={handleSignOut} className='font-medium text-lg'>
						Log Out
					</button>
				)}
				<CartIcon />
			</div>
		</nav>
	);
};

export default Navigation;

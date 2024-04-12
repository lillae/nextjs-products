import { IProduct } from '@/lib/types/definitions';

const CartItems = ({ cart }: { cart: IProduct[] }) => {
	return (
		<div className='h-auto'>
			{cart.length !== 0 &&
				cart.map((item, index) => (
					<div
						key={index}
						className='flex justify-between border-b border-black-1/10 py-5 text-xl'>
						<strong className='capitalize'>{item.title}</strong>
						<strong className='pr-4'>$ {item.price}</strong>
					</div>
				))}
		</div>
	);
};

export default CartItems;

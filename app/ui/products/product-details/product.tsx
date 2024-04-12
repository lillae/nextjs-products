'use client';

import Rating from './rating';
import ProductSlider from './product-slider';
import Discount from '../discount';
import TitleOne from '@/ui/common/titles/title-one';
import ButtonPrimary from '@/ui/common/buttons/button-primary';
import { IProduct } from '@/lib/types/definitions';
import { useGlobalContext } from '@/lib/context/context-store';

const Product = ({ product }: { product: IProduct }) => {
	const { setCart, cart } = useGlobalContext();
	const findProduct = cart.filter((c) => c.id === product.id);

	const clickHandler = (product: IProduct) => {
		if (findProduct.length >= product.stock) {
			return;
		}
		setCart((current) => [...current, product]);
	};

	const infoMap = [
		{ title: 'Stock', text: product.stock },
		{ title: 'Brand', text: product.brand },
		{ title: 'Category', text: product.category },
	];

	return (
		<div className='max-w-[1233px] w-full mx-auto h-auto lg:h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-[70px]'>
			<div className='max-w-[619px] w-full'>
				<ProductSlider images={product.images} />
			</div>
			<div className='max-w-[649px] w-full'>
				<div className='w-full flex items-center justify-between pb-[9px]'>
					<TitleOne>{product.title}</TitleOne>
					<Rating rating={product.rating} />
				</div>
				<div className='max-w-[400px] w-full'>
					<p className='font-medium pb-[10px]'>{product.description}</p>
					<div className='flex flex-col gap-[10px] text-black-6 pb-[27px]'>
						{infoMap.map(({ title, text }, index) => (
							<p key={index}>
								{title}: {text}
							</p>
						))}
					</div>
					<Discount>{product.discountPercentage}</Discount>
				</div>
				<div className='flex flex-col lg:flex-row items-end lg:items-center justify-end lg:justify-between'>
					<span className='text-primary font-semibold text-[64px]'>
						{product.price} $
					</span>
					<ButtonPrimary onClick={() => clickHandler(product)} disabled>
						Add To Cart
					</ButtonPrimary>
				</div>
			</div>
		</div>
	);
};

export default Product;

import Image from 'next/image';

import ButtonCard from '@/ui/common/buttons/button-card';
import { IProduct } from '@/lib/types/definitions';
import { truncateText } from '@/utils/utils';
import Discount from './discount';

const ProductCard = ({ product }: { product: IProduct }) => {
	const { thumbnail, discountPercentage, title, price, description, id } =
		product;

	return (
		<div className='max-w-[305px] w-full h-[320px] flex flex-col bg-white border-[0.65px] border-[#DBDBDB] rounded-[6px] pt-[10px] pb-[25px] px-[11px]'>
			<div className='pb-[8px] relative'>
				<Image
					src={thumbnail}
					alt='product thumbnail'
					width={282}
					height={149}
					className='w-full h-[149px] object-cover object-center rounded-[6px]'
				/>
				<Discount className='absolute top-[10px] right-[9px]'>
					{discountPercentage}
				</Discount>
			</div>
			<div className='w-full pb-[13px]'>
				<div className='flex justify-between items-center text-primary'>
					<h3 className='font-semibold text-xl capitalize'>
						{truncateText(`${title}`, 17)}
					</h3>
					<h4 className='font-semibold text-2xl'>{price} $</h4>
				</div>
				<p className='text-sm max-w-[230px] w-full'>
					{truncateText(`${description}`, 60)}
				</p>
			</div>
			<ButtonCard href={`/${id}`}>See Details</ButtonCard>
		</div>
	);
};

export default ProductCard;

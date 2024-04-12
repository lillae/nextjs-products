'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const ProductSlider = ({ images }: { images: string[] }) => {
	return (
		<>
			<Swiper
				cssMode={true}
				slidesPerView={1}
				centeredSlides={true}
				navigation={true}
				pagination={{ clickable: true }}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className='mySwiper h-[540px]'>
				{images.slice(0, 3).map((url: string, index: number) => (
					<SwiperSlide key={index} className='flex items-center justify-center'>
						<div className='h-[481px] w-[502px] relative mx-auto'>
							<Image
								src={url}
								alt='product image'
								fill={true}
								sizes=''
								className='object-cover object-95 max-w-full'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default ProductSlider;

'use client';

import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import ProductCard from './product-card';
import Spinner from '@/ui/common/spinner/spinner';
import { IProduct } from '@/lib/types/definitions';
import { fetchProducts } from '@/lib/actions/product-actions';

let limit = 4;

const LoadMore = () => {
	const { ref, inView } = useInView();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [products, setProducts] = useState<IProduct[]>([]);
	const [offset, setOffset] = useState(8);

	const loadMoreProducts = useCallback(async () => {
		const results = await fetchProducts(offset, limit);
		if (results) {
			setProducts([...products, ...results]);
			setOffset((previousOffset) => previousOffset + limit);
		}
	}, [offset, products]);

	useEffect(() => {
		if (inView) {
			setIsLoading(true);
			const delay = 500;

			const timeoutId = setTimeout(() => {
				loadMoreProducts();
				setIsLoading(false);
			}, delay);

			return () => clearTimeout(timeoutId);
		}
	}, [inView, isLoading, loadMoreProducts]);

	return (
		<div className='w-full flex flex-col items-center gap-6'>
			<div className='w-full justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-[21px] mx-auto'>
				{products.map((product: IProduct) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			<div ref={ref}>{inView && isLoading && <Spinner />}</div>
		</div>
	);
};

export default LoadMore;

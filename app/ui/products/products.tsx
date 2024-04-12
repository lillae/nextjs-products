import ProductCard from './product-card';

import { IProduct } from '@/lib/types/definitions';

const Products = ({ products }: { products: IProduct[] }) => {
	return (
		<div className='w-fit justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-[21px] mx-auto'>
			{products.map((product: IProduct) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Products;

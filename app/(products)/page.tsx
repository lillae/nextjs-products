import Products from '@/ui/products/products';
import TitleOne from '@/ui/common/titles/title-one';
import LoadMore from '@/ui/products/load-more';
import { fetchProducts } from '@/lib/actions/product-actions';

export default async function Home() {
	const initialProducts = await fetchProducts(0, 8);

	return (
		<main>
			<div className='wrapper flex flex-col items-center gap-y-[21px] pb-13'>
				<TitleOne>See Products</TitleOne>
				{initialProducts && <Products products={initialProducts} />}
				<LoadMore />
			</div>
		</main>
	);
}

import { fetchProduct } from '@/lib/actions/product-actions';
import Product from '@/ui/products/product-details/product';

type Params = {
	id: number;
};

export default async function ProductDetailsPage({
	params,
}: {
	params: Params;
}) {
	const { id } = params;
	const product = await fetchProduct(id);

	return <main>{product && <Product product={product} />}</main>;
}

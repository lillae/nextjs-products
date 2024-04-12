'use server';

import { IProduct } from '@/lib/types/definitions';

export const fetchProducts = async (offset: number, limit: number) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_PRODUCTS_BASE_URL}?skip=${offset}&limit=${limit}`
		);
		if (res.ok) {
			const data = await res.json();
			return data.products as IProduct[];
		} else {
			if (res.status === 404) throw new Error('404, Not found');
			if (res.status === 500) throw new Error('500, internal server error');
		}
	} catch (error: any) {
		console.error('Fetch', error);
	}
};

export const fetchProduct = async (id: number) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_PRODUCTS_BASE_URL}/${id}`
		);
		if (res.ok) {
			const data = await res.json();
			return data as IProduct;
		} else {
			if (res.status === 404) throw new Error('404, Not found');
			if (res.status === 500) throw new Error('500, internal server error');
		}
	} catch (error: any) {
		console.error('Fetch', error);
	}
};

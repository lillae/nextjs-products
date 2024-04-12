import Link from 'next/link';

type ButtonLink = {
	children: React.ReactNode;
	href: string;
};

const ButtonCard = ({ children, href }: ButtonLink) => {
	return (
		<Link
			href={href}
			className='bg-black-1 hover:bg-black-1/85 w-full h-[41px] text-white text-base text-center font-semibold rounded-[26px] flex items-center justify-center'>
			{children}
		</Link>
	);
};

export default ButtonCard;

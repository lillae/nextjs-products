'use client';

import { usePathname } from 'next/navigation';

type Button = {
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
	disabled?: boolean;
};

const ButtonPrimary = ({ children, onClick, className, disabled }: Button) => {
	const pathname = usePathname();

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${
				pathname === '/cart'
					? 'bg-accent hover:bg-accent/85'
					: 'bg-black-1  hover:bg-black-1/85'
			} h-[65px] w-[267px] rounded-[30px]  text-white  font-semibold text-[28px] ${className}`}>
			{children}
		</button>
	);
};

export default ButtonPrimary;

type Discount = {
	children: React.ReactNode;
	className?: string;
};

const Discount = ({ children, className }: Discount) => {
	return (
		<div
			className={`bg-accent w-[83px] h-[30px] text-white text-sm font-normal rounded-[14px] flex items-center justify-center ${className}`}>
			<p>
				-<strong>{children}</strong>%
			</p>
		</div>
	);
};

export default Discount;

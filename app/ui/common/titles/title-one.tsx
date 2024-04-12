const TitleOne = ({ children }: { children: React.ReactNode }) => {
	return (
		<h1 className='text-primary text-5xl font-semibold leading-heading capitalize'>
			{children}
		</h1>
	);
};

export default TitleOne;

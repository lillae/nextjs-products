import { IoMdCheckmarkCircle } from 'react-icons/io';

const SuccessMessage = () => {
	return (
		<div className='text-emerald-600 font-medium flex items-center gap-2'>
			<span>
				<IoMdCheckmarkCircle className='text-xl' />
			</span>
			<p>Thank you for your purchase</p>
		</div>
	);
};

export default SuccessMessage;

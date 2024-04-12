import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }: { rating: number }) => {
	const roundedRating = Math.floor(rating);

	return (
		<div className='flex justify-end items-center gap-[5px]'>
			<div className='flex gap-[4px]'>
				{[...Array(5)].map((star, index) => (
					<FaStar
						key={index}
						className={
							roundedRating >= index + 1 ? 'text-accent' : 'text-star-light'
						}
					/>
				))}
			</div>
			<strong>{rating}</strong>
		</div>
	);
};

export default Rating;

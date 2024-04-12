export const truncateText = (str: string, length: number) => {
	if (str.length > length) {
		return str.slice(0, length) + '...';
	} else return str;
};

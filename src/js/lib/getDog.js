// https://dog.ceo/api/breeds/image/random
export const getDog = async (imageHolderTag) => {
	try {
		const response = await fetch("https://dog.ceo/api/breeds/image/random");
		const obj = await response.json();
		imageHolderTag.src = obj.message;
	} catch (err) {
		console.error(err);
	}
};

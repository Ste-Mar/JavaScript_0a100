const filtrado = (array) => {
	newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.includes(array[i]) ? null : newArray.push(array[i]);
	}

	return newArray;
};

const primeraEnMayuscula = (string) => {
	let nuevoString = [];

	for (let i = 0; i < string.length; i++) {
		string[i] === "h" || string[i] === "m"
			? (nuevoString[i] = string[i].toUpperCase())
			: (nuevoString[i] = string[i]);
	}

	return nuevoString;
};

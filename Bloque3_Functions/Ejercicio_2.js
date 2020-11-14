const promedioDeNumeros = (numeros) => {
	let acumulador = 0;

	for (let i = 0; i < numeros.length; i++) {
		acumulador += numeros[i];
	}

	const promedio = acumulador / numeros.length;

	return promedio;
};

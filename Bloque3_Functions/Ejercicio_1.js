const elNumeroMaximo = (numeros) => {
	let maximo = numeros[0];

	for (let i = 1; i < numeros.length; i++) {
		if (numeros[i] > maximo) {
			maximo = numeros[i];
		}
	}

	return maximo;
};

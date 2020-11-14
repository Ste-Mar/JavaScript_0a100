const cantidadDeCaracteres = (text) => {
	let acumulador = 0;

	for (let i = 0; i < text.length; i++) {
		acumulador++;
	}

	return acumulador;
};

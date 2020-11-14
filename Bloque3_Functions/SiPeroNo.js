const restaDeArrays = (valores) => {
	const resultado = [];
	console.log(valores);

	for (let i = 0; i < valores.length; i++) {
		for (let j = 0; j < valores[i].length; j++) {
			resultado.includes(valores[i][j])
				? null
				: resultado.push(valores[i][j]);
		}
	}

	return resultado;
};

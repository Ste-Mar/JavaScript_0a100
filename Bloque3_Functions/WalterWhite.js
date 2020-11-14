const conteoDeEspaciosEnBlanco = (text) => {
	let espaciosEnBlanco = 0;

	for (let i = 0; i < text.length; i++) {
		text[i] === " " ? espaciosEnBlanco++ : null;
	}

	return espaciosEnBlanco;
};

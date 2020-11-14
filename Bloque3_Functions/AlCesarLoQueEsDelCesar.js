const cifradoCesar = (palabra) => {
    const palabraCodificada = [];

    console.log(palabra)

    const alfabeto = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    for (let i = 0; i < palabra.length; i++) {
        for (let j = 0; j < alfabeto.length; j++) {
            if (palabra[i] == alfabeto[j]) {
                j + 3 > alfabeto.length - 1
                    ? palabraCodificada[i] =
                    alfabeto[(j + 3) - alfabeto.length].toUpperCase()
                    : (palabraCodificada[i] = alfabeto[j + 3].toUpperCase());
            }
        }
    }


    return palabraCodificada;
};

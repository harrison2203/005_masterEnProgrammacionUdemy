function altoBajo(numeros){

	let ordenados = numeros.sort((a,b) => a - b);

	return {
			bajo : ordenados[0],
			alto : ordenados[ordenados.length - 1]
	};
}
altoBajo([15,56,98,1,98,32,4]);

// dado un array de numéros, devolver el valor mas bajo y el valor mas alto.
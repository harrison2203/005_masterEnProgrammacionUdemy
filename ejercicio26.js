
function fibonnaci(numero) {

	let serie = [0, 1];

	for (let i = 2; i <= numero; i ++){
		serie.push(serie[i - 1] + serie[i - 2]);
	}
	return [serie, serie[numero]];
}

console.log("Serie completa", fibonnaci (10)[0]);
console.log("Resultado fib", fibonnaci (10)[1]);
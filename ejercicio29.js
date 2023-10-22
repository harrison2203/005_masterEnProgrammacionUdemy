function capi(numero){

	let numeroaString = parseInt(numero
														.toString()
														.split('')
														.reverse()
														.reverse()
														.join('')
	);
	
	return numero === numeroaString;

}

console.log(capi(2005));


//dado un numero indicar si es un numero capicua o no.
// los numeros capicua se leen igual de izwuierda a derecha i viceversa


function capi(numero){
	const numeroString = numero.toString();
	const numeroInverso = numeroString.split('').reverse().join('');
	return numeroString === numeroInverso;
}

console.log(capi(2005)); 


function aleatorio(primerNumero, segundoNumero){

	return Math.round(Math.random() * (segundoNumero - primerNumero) + primerNumero);

}

console.log(aleatorio(1, 100));

// dado dos numeros generar un numero aleatorio del uno al 100
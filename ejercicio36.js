function cuentaLetras(texto){

	let consonantes = 0;
	let vocales = 0;
	let texto_limpio = "";

	texto_limpio = texto.split("")
											.filter(letra => /[àéù\w]/gi.test(letra) && isNaN(letra)) // filtra que no sea numeros y 
											.join();

	for (letra of texto_limpio){
		if (/[aeiouàéù]/gi.test(letra)){
			vocales ++;

		} else {
			consonantes ++;

		}
	} 
		return [consonantes, vocales];
}

let letras = (cuentaLetras("victorrobles.es"));
console.log ("consonantes", letras[0]);
console.log ("vocales", letras[1])


// dado un texto, devolver cuantas vocales y cuantas consonantes tiene

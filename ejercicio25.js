
function MayusMinus(texto) {

	let mayusculas = 0;
	let minusculas = 0;
	
		for (letra of texto) {
	
			if (/[A-Z]/.test(letra)){ // mira si cada letra corresponde al regex /[A-Z]/
				mayusculas ++
	
			} else {
				minusculas ++
			}
		}
			if (mayusculas > minusculas){
				return texto.toUpperCase()
			}else {
				return texto.toLowerCase()
			}
	}
	
	console.log (MayusMinus ("JOAQuin")); // devuelve JOAQUIN
	console.log (MayusMinus ("Victor")); // devuelve: victor
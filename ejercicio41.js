function triangulo (numero){

	let mitad = Math.floor(numero - 1);
	let resultado = "";

	for(let fila = 0; fila < numero; fila ++){
			let nivel = "";
			
			for(let columna = 0; columna < (2 * numero - 1); columna ++){
			//	console.log(mitad - fila, mitad + fila)
				if(mitad - fila <= columna && mitad + fila >= columna){
					nivel += "*";
				}else{
					nivel += " ";
				}
				resultado += nivel + "\n";
			}
		}
		return resultado;
}

console.log(triangulo(4));

// dado un numero, mostrar un triangulo de asteriscos * con ese numéro de filas
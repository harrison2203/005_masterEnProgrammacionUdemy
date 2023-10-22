function eliminarDuplicados2(elementos){

	elementos = elementos.filter(elemento => {
			return typeof elemento === "number";
	});

	let sin_duplicados = newSet(elementos);

	return Array.from(sin_duplicados);
}



function eliminarDuplicados(array){

	let result = [];

	for (let i = 0; i < array.length; i ++){

		if(typeof array[i] === "string"){

			result = array.filter(function(element){
				return typeof element !== 'string';
			})
		}else{
			result = array;
		}
	}
	let uniqueElement = [...new Set (result)];
	return uniqueElement;
}

console.log(eliminarDuplicados([1,2,1,1,1,3,4]));
console.log(eliminarDuplicados([1,1,9, "z"]));


// dado un array de numeros, devolver el array sin elementos duplicados.
// si hay un string eliminarlo del array
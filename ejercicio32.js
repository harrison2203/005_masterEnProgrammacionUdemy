function cuadrado(numeros){

	let numerosCuadrados = numeros
													.filter(numero => typeof numero === "number")
													.map( numero => Math.pow(numero, 2))
													
}

console.log(cuadrado([5,6,7]));
console.log(cuadrado([5,6,7, "true", true]));




function alCuadrado (arrays){

	let push = [];
	let result = [];
	arrays = arrays.filter(array => {
		return typeof array === "number";

});
	for (let i = 0; i < arrays.length; i ++){
		result = arrays[i] * arrays[i]
		push.push(result)
		
	}
	return push;
}

console.log(alCuadrado([5,6,7]));
console.log(alCuadrado([3, "test", 7, 10]));
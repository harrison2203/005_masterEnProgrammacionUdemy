
function factorial(numero){

let result = 1;

	for (let i = 1; i <= numero; i ++){
		result *= i;
	}
	return result;
}

console.log(factorial(3));

//dado un numero devolver su factorial
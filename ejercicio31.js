function angulo(numero){

		if(numero < 90){
			return "agudo";

		}else if(numero === 90){
			return "recto";

		}else if(numero > 90 && numero < 180){
			return "obtuso";

		}else if(numero === 180){
			return "llano"

		}else if(numero > 180 && numero < 360){
			return "Angulo Concavo"
		}
}

console.log(angulo(47));
console.log(angulo(90));
console.log(angulo(145));
console.log(angulo(180));
console.log(angulo(349));





//dado un numero, indicar que tipo de angulo es.
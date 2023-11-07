function comprabarEmail(email){
    
	return /^\w+@\w+\.\w+$/gi.test(email); // ^ : comienza con palabra. w = atajo que es una palabra
	
}

console.log(comprabarEmail("harrisonalzate@hotmail.com"));

//dado un texto, comprobar que sea un email valido.
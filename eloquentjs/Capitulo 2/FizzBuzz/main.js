//Fizz Buzz

for(let contador = 1; contador <= 100; contador++){

	let salida = "";
	if (contador % 3 == 0) {salida += "Fizz"};
	if (contador % 5 == 0) {salida += "Buzz"};

	console.log(salida || contador);
}
function Mostrar()
{
  /*Se ingresa un porcentaje de descuento y el importe, mostrar cuanto se debe pagar*/
	var importe;
	var descuento;
	var totaldesc;
	var preciofinal;

	descuento=prompt("cual es el porcentaje de descuento");
	descuento=parseInt(descuento);
	importe=prompt("Cual es el importe del producto");
	importe=parseInt(importe);


	totaldesc=descuento*importe/100;
	preciofinal=importe-totaldesc;

	document.getElementById('importeFinal').value=preciofinal;
	console.log("preciofinal");
	
}


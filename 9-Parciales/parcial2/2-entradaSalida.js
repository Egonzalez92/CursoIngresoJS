//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");
	
	var importe;
	var precioiva;
	var importefinal;

	importe=prompt("Ingrese importe");
	importe=parseInt(importe);

	precioiva=importe*21/100;
	importefinal=importe+precioiva;

	document.getElementById('importe').value=importefinal;


}

/* -Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar"  lea un importe  de un producto por y muestre el importe final
					sumándole el IVA (21%)*/
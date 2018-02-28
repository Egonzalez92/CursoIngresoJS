function Mostrar()
{
  
	var importe;
	var iva;
	var total;

	importe=prompt("Cual es el importe del producto");
	importe=parseInt(importe);
	iva=0.21;
	ivatotal=iva*importe;
	total=importe + ivatotal;
	
	document.getElementById('importeFinal').value=total;
	console.log("total");
	
}


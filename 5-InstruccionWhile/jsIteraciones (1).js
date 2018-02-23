function Mostrar()
{
	//alert('iteración while');
	var contador;
	contador=0;
	while(contador<10)
	{
		contador=contador+1;
		document.write("<br> "+contador);
		
	}

	document.write("<br>sali "+ contador);
	/*Interacion el contador siempre inicializa en 0, el while tiene que ser menor a las vueltas que queremos que de ej: contador<20
	sumar contador=contador+1 o contador ++*/
}//FIN DE LA FUNCIÓN
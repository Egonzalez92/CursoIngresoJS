function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	while(respuesta=='si')
	{
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		acumulador= acumulador+numero;
		respuesta= prompt("Para continuar, si");
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
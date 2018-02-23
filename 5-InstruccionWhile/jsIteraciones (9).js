function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo=0;
	var minimo=0;
	var numero;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if(contador==1)
		{
		maximo=numero;
		minimo=numero;
		}
		
		if(contador>1 && numero>maximo)
		{
			maximo=numero;
		}
		if(contador>1 && numero<minimo)
		{
			minimo=numero;
		}
		respuesta=prompt("desea continuar?");
	}

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN
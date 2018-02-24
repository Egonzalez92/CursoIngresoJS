function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numero;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if(contador==0)
		{
		contador++;
		maximo=numero;
		minimo=numero;
		}
		else	
			{

		if(numero>maximo)
		{
			maximo=numero;
		}
		else if(numero<minimo)
		{
			minimo=numero;
		}
		
			}			
		respuesta=prompt("desea continuar?");
	}

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN
function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var	numero;
	var respuesta='si';

	while(respuesta=='si')
	{
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		
		if(numero>1)
		{
			positivo=positivo+numero;
		}
		else
			{
		if(numero<1)
		{
			negativo=negativo*numero;	
		}
			}
		respuesta= prompt("Para continuar, si");

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
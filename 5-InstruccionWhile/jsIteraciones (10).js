function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var positivos=0;
	var negativos=0;
	var contadorpositivos=0;
	var contadornegativos=0;
	var numerospares=2;
	var contadorceros=0;
	var numero;
	var respuesta="si";

	while(respuesta!="no")
	{
		
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if(numero<0)
		{
			contadornegativos++;
			negativos=negativos+numero;
		}
		else
			{		
			if(numero>0)
				{
				
					contadorpositivos++;	
					positivos=positivos+numero;

				}
				else 
				{
					contadorceros++;
				}
				if(numero%2==0)
					{
						numerospares++;
					}	

			}

		respuesta=prompt("Desea continuar? (no)");		
	}

	document.write("<br>Suma de los negativos "+ negativos);
	document.write("<br>Suma de los positivos "+ positivos);
	document.write("<br>Cantidad de negativos "+ contadornegativos);
	document.write("<br>Cantidad de positivos "+ contadorpositivos);
	document.write("<br>Cantidad de ceros "+ contadorceros);
	document.write("<br>Cantidad de numeros pares "+ numerospares);
	document.write("<br>Promedio de positivos "+ positivos/contadorpositivos);
	document.write("<br>Promedio de negativos "+ negativos/contadornegativos);
	document.write("<br>Diferencia entre positivos y negativos "+ (positivos-negativos));
/*1-Suma de los negativos.
					2-Suma de los positivos.
					3-Cantidad de positivos.
					4-Cantidad de negativos.
					5-Cantidad de ceros.
					6-Cantidad de números pares.
					7-Promedio de positivos.
					8-Promedios de negativos.
					9-Diferencia entre positivos y negativos, (positvos-negativos). */
}//FIN DE LA FUNCIÓN
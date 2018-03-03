//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contadordias=0;
	var importe;
	var mayor;
	var minimo;



	while(contadordias<7)
	{	
		contadordias++;
		importe=prompt("ingrese el importe");
		importe=parseInt(importe);

		while(isNaN(importe)|| importe<0)
		{
			importe=prompt("ingrese el importe, por favor");
			importe=parseInt(importe);
		}

			if(contadordias==1)

			{
				contadordias++;
				mayor=importe;
				minimo=importe;

			}else
				{
					if(importe>mayor)
					{
						mayor=importe;
					}else
						{
							menor=importe;
						}

				}

	}

	document.write("Su mayor importe es: "+mayor+" y su menor importe es: "+menor);

	
}

/*6-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar" 
 pida el importe de las ventas (validar que sea mayor a 0,”cero”) 
 de los 7 días de la semana por prompt (una por día), 
 e informar cual fue el mayor importe y cuál fue el menor importe de venta*/
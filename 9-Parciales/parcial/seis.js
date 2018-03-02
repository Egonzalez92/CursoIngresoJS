function Mostrar()
{
	var dias;
	var contadordias=0;
	var importeventas;
	var maximo;
	var minimo;
	var respuesta='si';



	while(respuesta!='no')
	{

		contadordias++;
		importeventas=prompt("Ingrese el importe de venta");
		importeventas=parseInt(importeventas);

		while(importeventas<0)
		{

		importeventas=prompt("Error, ingrese correctamente el importe");
		importeventas=parseInt(importeventas);

		}

		if(contadordias==1)
		{
			contadordias++;
			maximo=importeventas;
			minimo=importeventas;
		}else
			{

				if(importeventas>maximo)
				{
					maximo=importeventas;

				}else if(importeventas<minimo)
					{

						minimo=importeventas;
					} 

			}

		respuesta=("desea continuar?");
	}	



document.write("El mayor importe fue "+maximo);
document.write("El menor importe fue "+minimo);


}
/*Realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los 24 días
hábiles del mes por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor
importe de venta.*/
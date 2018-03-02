function Mostrar()
{

/*vamos a pedir 3 datos hasta que el cliente quiera, los datos son nombre del animal, peso del animal(>0),
la termperatura del habitat donde vive el animal entre -40 y 40, me van a informar el nombre del animal mas pesado,
el nombre del animal de la temp mas baja, la cantidad de temperaturas pares que se ingresaron, el promedio del peso
de todos los animales, la temp maxima y la temp minima */


	var nombreAnimal;
	var cantdeanimales;
	var peso=0;
	var temperatura=0;
	var tempmax;
	var tempmin;
	var promedio;
	var respuesta='si'

	while(respuesta='si')

	{	

		cantdeanimales++;
		nombreAnimal=prompt("¿Cual es el nombre del animal?");
		
		peso=prompt("¿Cual es el peso del animal");
		peso=parseInt(peso);

		temperatura=prompt("¿Cual es la temperatura de su habitat");
		temperatura=parseInt(temperatura);


		while(isNaN(nombreAnimal))
		{
			nombreAnimal=prompt("Cual es el nombre del animal?");
		}

			while(isNaN(peso) || peso>0)
			
			{
			
			peso=prompt("¿Reingrese el peso del animal");
			peso=parseInt(peso);
				
			}
				while(isNaN(temperatura) || temperatura< -41 || temperatura>40)
				{
				temperatura=prompt("¿Cual es la temperatura de su habitat");
				temperatura=parseInt(temperatura);
				}
					while(pesoAnimal)

		
					respuesta=("Desea continuar?");	

	}	
			

	
}
/*Siempre buscar datos.*/
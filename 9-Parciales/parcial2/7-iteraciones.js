//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var sexo;
	var nota;
	var acumulador=0;
	var sacarminimo=0;
	var minimo;
	var promedio;
	var contvarones=0;

	for(var contador=0;contador<6;contador++)
	{
		nota=prompt("ingrese nota");
		nota=parseInt(nota);

		while(isNaN(nota)|| nota<0 || nota>10)
		{
		nota=prompt("Error, ingrese nota");
		nota=parseInt(nota);
		}
		
		sexo=prompt("ingrese sexo");
		while(sexo!='f' && sexo!='m')
		{
		sexo=prompt("Error, ingrese sexo");
		}

		acumulador+=nota;

		if (sacarminimo==0) 
		{
			sacarminimo++;
			minimo=nota;
		}
		if(nota<minimo)
		{
			minimo=nota;
		}
		if(nota>=6 && sexo=='m')
		{
			contvarones++;
		}	
	}

promedio=acumulador/contador;

alert("El promedio de las notas totales es: " +promedio+ " la nota mas baja es: " +minimo+ " la cant de varones es: " +contvarones);					

	
}

/*7-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar" pida por prompt  las notas (validar entre 0 y 10)
 y el sexo(validar el sexo “f” o “m”) de 6 alumnos,
 informar por alert:
					a) el promedio de las notas totales.
					b) la nota más baja.
					c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/
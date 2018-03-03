function Mostrar()
{

/*vamos a pedir 3 datos hasta que el cliente quiera, los datos son nombre del animal, peso del animal(>0),
la termperatura del habitat donde vive el animal entre -40 y 40, me van a informar el nombre del animal mas pesado,
el nombre del animal de la temp mas baja, la cantidad de temperaturas pares que se ingresaron, el promedio del peso
de todos los animales, la temp maxima y la temp minima */
var contador=0;
var numero;
var cantpares=0;
var acumulador=0;
var maximo;
var minimo;
var flag=0;
var seguir=true;
var promedio;
var 



while (seguir==true)
	{
		contador++;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		while(numero<0)
		{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		}
		if(numero%2==0)
		{
			cantpares++;
		}
	
		acumulador+=numero;
		if(flag==false || numero<minimo)
		{
			minimo=numero;
		}
		if(flag==false || numero>maximo)
		{
			maximo=numero;
			flag=true;
		}


	}	
		seguir=confirm("desea continuar?");
}
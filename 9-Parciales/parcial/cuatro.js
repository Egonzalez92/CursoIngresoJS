function Mostrar()
{

var a;
var b;
var resultado;

	a=prompt("Ingrese el primer numero");
	b=prompt("Ingrese el segundo numero");
	a=parseInt(a);
	b=parseInt(b);

		if(a==b)
		{
			resultado=a*b;

		}else if(a>b)
			{
				resultado=a-b;
			}else
				{
					resultado=a+b;
				}

document.write("El resultado es: "+resultado);
}

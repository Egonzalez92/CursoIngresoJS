function Mostrar()
{
/*Ingresamos 2 numeros, si son iguales, los concatenamos, si el primero es mayor que el segundo los multiplicamos, 
y si el primero es menor que el segundo los restamos*/
var num1;
var num2;
var resultado;

	num1=prompt("Ingrese el primer numero");
	num2=prompt("Ingrese el segundo numero");
	num1=parseInt(num1);
	num2=parseInt(num2);

		if(num1==num2)
		{
			resultado= num1 +""+ num2;

		}else if(num1>num2)
			{
				resultado=num1*num2;

			}else
				{
					resultado=num1-num2;

				}if(resultado%2==0 && resultado!=0)
					{
						resultado+resultado + "es par";
					}


}

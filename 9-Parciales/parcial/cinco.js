function Mostrar()
{/*vamos a ingresar 3 numero y vamos a mostrar el mayor*/

	/*var dia;

	dia=prompt("que dia de la semana es?");

	switch(dia)
		{
			case 'sabado':
			case 'domingo':
				alert("Es fin de semana");
				break;
			default:
				alert("A trabajar");
				break;
		}
*/
	var num1;
	var num2;
	var num3;
	var mayor;

		num1=prompt("ingresa un numero");
		num1=parseInt(num1);
		num2=prompt("ingresa un numero");
		num2=parseInt(num2);
		num3=prompt("ingresa un numero");
		num3=parseInt(num3);

		if(num1>num2 & num1>num3)
		{	
			mayor=num1;	

		}else if(num2>num1 & num2>num3)
			{
				mayor=num2;

			}else
				{
					mayor=num3;
				} 	
		alert("el numero mayor es "+ mayor);		
}

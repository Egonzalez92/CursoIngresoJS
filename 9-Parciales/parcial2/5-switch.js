//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var mes;

	mes=prompt("en que mes estamos?");

	switch(mes)
	{

		case"enero":
		case"febero":
				alert("es veranitooo");
				break;

		default:
				alert("extraño enero y febero");
				break;


	}
	
}


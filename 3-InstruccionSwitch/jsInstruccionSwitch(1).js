function Mostrar()
{
//tomo la edad  

var mesDelAño = document.getElementById('mes').value;


switch (mesDelAño)	
{

    case "Enero":
					alert("Que comiences bien el año");
					break;
    case "Marzo":
					alert("A clases!!");
					break;
	case "Julio":
					alert("Se vienen las vacaciones");
					break;
	case "Diciembre":
					alert("Felices Fiestas!!!");
					break;
}
}
/*Para que lea solamente un case, hay que agregar Break al final.
El default es como el else en el if, 
case "18":
			

				break*/
//FIN DE LA FUNCIÓN
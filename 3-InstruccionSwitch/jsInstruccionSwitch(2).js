function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch (mesDelAño)	
{

    case "Julio":
	case "Agosto":
					alert("Abrigate que hace frio");
					break;
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
				alert("Ya pasamos el frio, ahora hace calor")
				break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
					alert("Falta para el invierno")
					break; 
				}
			
}//FIN DE LA FUNCIÓN
function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch (mesDelAño)
{
	case "Febrero":
					alert("Este mes no tiene mas de 29 dias")
					break;
	default:
					alert("Este mes tiene 30 o mas dias")
					break;
}	


}//FIN DE LA FUNCIÓN 

/*El default lo utilizamos cuando queremos que el resto tenga un valor diferente al mes seleccionado*/
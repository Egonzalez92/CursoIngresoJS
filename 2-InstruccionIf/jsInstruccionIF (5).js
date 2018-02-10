function Mostrar()
{
//tomo la edad  
	var	edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad>=13 && edad<=17)

		{alert("Es adolescente")}
	
	if (edad>=18 && edad<=99)

		{alert("No son adolescentes")}

}//FIN DE LA FUNCIÓN
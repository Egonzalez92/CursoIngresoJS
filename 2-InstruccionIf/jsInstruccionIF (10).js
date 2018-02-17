function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var nota

	nota= document.getElementById('FormIngreso').innerHTML;
	nota= Math.floor(Math.random() * 10) + 1;

	if(nota>8)
	{
		alert( nota + " Excelente");
	}
	else 

		if(nota>3)
		
			alert(nota + " Aprobo");
		
		else 
					alert(nota + " Vamos, la proxima se puede");
	}	
		//FIN DE LA FUNCIÓN
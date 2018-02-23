function Mostrar()
{

	var sexo=prompt("ingrese f ó m .");

	while(sexo!='m' && sexo!='f')
		{
			sexo=prompt("Error, ingrese f ó m");
		}/*Puedo utilizar el If y else para que se visualice en vez 
		de "f" o "m" diga FEMENINO O MASCULINO*/
		if (sexo=='f') 
		{
			sexo="femenino";
		}else
		{
			sexo="masculino";
		}


	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
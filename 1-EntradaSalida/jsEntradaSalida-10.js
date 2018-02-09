/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var a; 
	var b; 
	var total;

	a=document.getElementById('importe').value;
	
	a=parseInt(a);
	b=a*0.25;

	total=a-b
	document.getElementById('resultado').value=total;
}

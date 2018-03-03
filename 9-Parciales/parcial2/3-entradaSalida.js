//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var ancho;
	var largo;
	var resultado;

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	largo=document.getElementById('largo').value;
	largo=parseInt(largo);



	resultado=(ancho*2+largo*2) *6;

	alert("se necesitan: "+resultado+" metros de hilos");
}

/*3-Realizar el algoritmo que al presionar el botón "Mostrar"
 tome por ID dos datos, el largo y ancho de un terreno y luego que muestre 
 cuantos metros de alambre se necesitan para colocarle 6 hilos de alambrado a su perímetro*/
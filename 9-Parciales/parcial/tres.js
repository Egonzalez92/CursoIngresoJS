function Mostrar()
{

var a;
var b;
var resultado;

a=document.getElementById('largo').value;
b=document.getElementById('ancho').value;
a=parseInt(a);
b=parseInt(b);

resultado=(a*2+b*2) *3;

alert("Se necesitan "+resultado+" metros de alambre");



/*Bienvenidos. 
Realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno
y luego que muestre cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.*/

}

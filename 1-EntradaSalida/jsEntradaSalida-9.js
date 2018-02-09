/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	/*Asigno las variables*/
	var a; 
	var b; 
	var total;
	/*Luego de asignar las variables, busco el valor por ID en el documento*/
	a=document.getElementById('sueldo').value;
	/*Parseamos la variable A para transformar el texto a numero y le damos el valor a b para que sea el
	resultado del 10%*/
	a=parseInt(a);
	b=a*0.10;
	/*Luego para finalizar vamos a sumar las 2 variables, y para que nos muestre en el recuadro de resultado
	tenemos que poner document.getelementByid().value=total; esto esta diciendo que nos muestre dicho resultado
	en la caja*/
	total=a+b
	document.getElementById('resultado').value=total;


}

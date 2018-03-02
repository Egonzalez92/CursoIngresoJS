
function Mostrar()
{
/*Van a pedir la base y aparte la altura y me van a informar el perimetro de ese triangulo equilatero y la superficie	*/
	var base;
	var altura;
	var lados=3;
	var perimetro;
	var superficie;

	base=document.getElementById('laBase').value;
	altura=prompt("Ingrese la altura");
	altura=parseInt(altura);
	perimetro=base*lados;
	superficie=base*altura/2;

	alert("el perimetro es: "+ perimetro+" y la superficie es: "+ superficie);
	
}

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num1;
    int num2;
    int superficie;
    int perimetro;

    printf("Ingresa la base: ");
    scanf("%d", &num1);
    printf("Ingresa la altura: ");
    scanf("%d", &num2);

    perimetro=num1*num2/2;
    superficie=num1*3;
    printf("Su perimetro es: %d y su superficie es: %d", perimetro, superficie);

    return 0;
}

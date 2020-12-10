/**
 * Programa # 2
- Desarrollar un programa que cargue los lados de un triángulo e implemente los siguientes métodos: inicializar los atributos, imprimir el valor del lado mayor y otro método que muestre si es equilátero o no.
 */

import Ask from 'https://deno.land/x/ask/mod.ts';

const getTipoTriangulo = (triangulo: Array<number>): string => {
    const duplicados = (new Set(triangulo)).size

    let trianguloTipoNombre = 'escaleno'

    if (duplicados == 1) {
        trianguloTipoNombre = 'equilatero'
    }

    if (duplicados == 2) {
        trianguloTipoNombre = 'isosceles'
    }

    return trianguloTipoNombre
}
(async () => {
    const ask = new Ask();

    const { cantidadTriangulos } = await ask.prompt([
        {
            name: 'cantidadTriangulos',
            type: 'number',
            message: 'Cuantos Triangulos insertara?',
        }
    ]);

    // Inserte (a,b,c) de N Triángulos
    const triangulos  = new Array<any>(cantidadTriangulos);
    for (let index = 0; index !== triangulos.length; index++) {
        const { tupla } = await ask.prompt([
            {
                name: 'tupla',
                type: 'input',
                message: `Ingresar tama;o los lados de triangulo ${index + 1}  en formato: a,b,c`,
            }
        ]);

        const [a, b, c] = String(tupla).split(',');
        triangulos[index] = [Number(a), Number(b), Number(c)];
    }

    

    for (let trianguloIndex in triangulos) {
        const triangulo = triangulos[trianguloIndex]
        const tipoTriangulo = getTipoTriangulo(triangulo)
        const maxSide = Math.max(...triangulo);

        console.log(`Triangulo ${Number(trianguloIndex) + 1} es ${tipoTriangulo} su lado mas grande es ${maxSide}`)
    }

})();

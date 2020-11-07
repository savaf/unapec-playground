/**
 * Programa # 2
 * Realizar un programa que lea los lados de n triángulos, e informar:
 *  (a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), 
 *      isósceles (dos lados iguales), o escaleno (ningún lado igual)
 *  (b) Cantidad de triángulos de cada tipo.
 *  (c) Tipo de triángulo que posee menor cantidad.
 */

import Ask from 'https://deno.land/x/ask/mod.ts';

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

    const counterTipos : any = {
        escaleno: 0,
        equilatero: 0,
        isosceles: 0
    }
    for (let trianguloIndex in triangulos) {
        const triangulo = triangulos[trianguloIndex]
        const tipoTriangulo = getTipoTriangulo(triangulo)

        counterTipos[tipoTriangulo] = counterTipos[tipoTriangulo] + 1;

        console.log(`Triangulo ${Number(trianguloIndex)  + 1} es ${tipoTriangulo}`)
    }


    console.log(`Cantidad de triángulos de cada tipo:
        - escaleno: ${counterTipos.escaleno}
        - equilatero: ${counterTipos.equilatero}
        - isosceles: ${counterTipos.isosceles}
    `)


    const tipoConMenosLados = Object.keys(counterTipos).sort((a, b) => {
        return counterTipos[a] - counterTipos[b];
    })

    console.log(`Tipo de triángulo que posee menor cantidad ${tipoConMenosLados[0]}`)

})();

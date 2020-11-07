/**
 * Programa # 1
 * Confeccionar un programa que lea N pares de datos, cada par de datos 
 * corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
 * 
 *   a) De cada triángulo la medida de su base, su altura y su superficie.
 *   b) La cantidad de triángulos cuya superficie es mayor a 12.
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

    // Inserte (h,bv) de N Triángulos
    const triangulos  = new Array<any>(cantidadTriangulos);
    for (let index = 0; index !== triangulos.length; index++) {
        const { tupla } = await ask.prompt([
            {
                name: 'tupla',
                type: 'input',
                message: `Ingresar altura y base de triangulo ${index + 1}  en formato: Altura,base`,
            }
        ]);

        const [height, base] = String(tupla).split(',');
        const surface = Number(height || 0) * Number(base || 0)
        const area = surface / 2
            
        triangulos[index] = {
            height,
            base,
            surface,
            area
        }
    }

    const getPromedio = (propName: string) => {
        const sum = triangulos.reduce((x, y) => Number(x[propName] || 0) + Number(y[propName] || 0));
        return sum / cantidadTriangulos;
    }


    console.log(`Promedios:
        - Altura: ${getPromedio('height')}
        - Base: ${getPromedio('base')}
        - Area: ${getPromedio('area')}
    `)

    const cantidadMayorQue12 = triangulos.filter((x) => x.area > 12).length;

    console.log(`Cantidad de triangulos areas mayores a 12 son ${cantidadMayorQue12}`);

})();

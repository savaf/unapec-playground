/**
 * Programa # 2
 * Desarrollar un programa que permita la carga de 10 valores por teclado y nos
 * muestre posteriormente la suma de los valores ingresados y su promedio.
 */

import Ask from 'https://deno.land/x/ask/mod.ts';

(async () => {
    const ask = new Ask();

    const values = Array(10);

    for (let index = 0; index < values.length; index++) {
        const { value } = await ask.prompt([
            {
                name: 'value',
                type: 'number',
                message: `value ${index + 1}?`
            }
        ]);
        
        values[index] = value;
    }

    const sumValues = values.reduce((x, y) => x + y);
    const average = sumValues / values.length;

    console.log('suma de valores', sumValues);
    console.log('Promedio de valores', average);

})();

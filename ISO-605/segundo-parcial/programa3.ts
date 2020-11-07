/**
 * Programa # 3
 * Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
 *  (a) La cantidad de valores ingresados negativos.
 *  (b) La cantidad de valores ingresados positivos.
 *  (c) La cantidad de múltiplos de 15.
 *  (d) El valor acumulado de los números ingresados que son pares.
 */

import Ask from 'https://deno.land/x/ask/mod.ts';

(async () => {
    const ask = new Ask();

    const resultados = {
        negativos: 0,
        positivos: 0,
        multiplos15: 0,
        pares: 0,
    }

    const values  = new Array<number>(10);
    for (let index = 0; index !== values.length; index++) {
        const { value } = await ask.prompt([
            {
                name: 'value',
                type: 'number',
                message: `Ingresar valor ${index + 1} : `,
            }
        ]);
        values[index] = value;
        resultados.negativos = value < 0 ? resultados.negativos + 1 : resultados.negativos;
        resultados.positivos = value > 0 ? resultados.positivos + 1 : resultados.positivos;
        resultados.multiplos15 = value % 15 === 0 ? resultados.multiplos15 + 1 : resultados.multiplos15;
        resultados.pares = value % 2 === 0 ? resultados.pares + 1 : resultados.pares;
    }


    
    console.log('(a) La cantidad de valores ingresados negativos.', resultados.negativos)
    console.log('(b) La cantidad de valores ingresados positivos.', resultados.positivos)
    console.log('(c) La cantidad de múltiplos de 15.', resultados.multiplos15)
    console.log('(d) El valor acumulado de los números ingresados que son pares.', resultados.pares)

})();

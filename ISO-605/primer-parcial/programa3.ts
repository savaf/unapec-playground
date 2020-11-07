/**
 * 
 * Confeccionar un programa que pida por teclado tres (3) notas de un alumno,
 * calcule el promedio e imprima alguno de estos mensajes:
 * - Si el promedio es >=70 mostrar "Promovido".
 * - Si el promedio es >=40 y <70 mostrar "Regular".
 * - Si el promedio es <40 mostrar "Reprobado".
 */

import Ask from 'https://deno.land/x/ask/mod.ts';

(async () => {
    const ask = new Ask();

    const notas = Array(3);

    console.log('Insertar 3 notas de un alumno')
    for (let index = 0; index < notas.length; index++) {
        const { nota } = await ask.prompt([
            {
                name: 'nota',
                type: 'number',
                message: `nota ${index + 1}?`,
                min: 0,
                max: 100,
            }
        ]);
        
        notas[index] = nota;
    }

    const sumValues = notas.reduce((x, y) => x + y);
    const promedio = sumValues / notas.length;

    console.log('Promedio es', promedio);
    const conditionalLog = (say : string, condition : boolean) => (condition && console.log(say));
    conditionalLog("Promovido", promedio >= 70)
    conditionalLog("Regular", promedio >= 40 && promedio < 70)
    conditionalLog("Reprobado", promedio < 40)
})();
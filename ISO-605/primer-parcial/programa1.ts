/**
 * Programa # 1
 * En una empresa trabajan N empleados cuyos sueldos oscilan entre $10,000 y $50,000, 
 * realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos 
 * empleados cobran entre $10,000 y $30,000 y cuántos cobran más de $30,000. Además el
 * programa deberá informar el importe que gasta la empresa en sueldos al personal.
 */

import Ask from 'https://deno.land/x/ask/mod.ts';

(async () => {
    const ask = new Ask();

    const { cantidadEmpleados } = await ask.prompt([
        {
            name: 'cantidadEmpleados',
            type: 'number',
            message: 'Cuantos empleados empleados tiene la empresa?',
        }
    ]);

    // Inserte salario de N empleados
    const salariosArr = Array(cantidadEmpleados);
    for (let index = 0; index < salariosArr.length; index++) {
        // Insertar salario de empleado
        const { salario } = await ask.prompt([
            {
                name: 'salario',
                type: 'number',
                message: `Cual es el salario del empleado ${index + 1}?`,
                min: 10000,
                max: 50000,
            }
        ]);
        
        salariosArr[index] = salario;
    }


    const cobran10kto30k = salariosArr.filter(x => x >= 10000 && x <= 30000).length;
    const cobran30kMore = salariosArr.filter(x => x > 30000).length;
    const gastoTotalEnNomina = salariosArr.reduce((prev, current) => prev + current);


    console.log('Cuántos empleados cobran entre $10,000 y $30,000?', cobran10kto30k)
    console.log('Cuántos empleados cobran más de $30,000?', cobran30kMore)
    console.log('Importe que gasta la empresa en sueldos al personal?', gastoTotalEnNomina)

})();


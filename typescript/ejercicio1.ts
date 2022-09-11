//1.1

let pi = '3.14159';
let tau = +pi * 2;      //el + convierte al string en number

console.log('[Ejercicio 1.1]', `${tau} es ${pi} veces el dos.`);

// 1.2
class Torta {
    ingrediente : string;
    otro_ingrediente : number;
}

let torta : Torta = new Torta();
torta.ingrediente = 'arandanos';        //torta es del tipo any, creo tipo torta
//torta.otro_ingrediente = 'chocolate';             //tipo mal ingresado

console.log('[Ejercicio 1.2]', `Me gusta comer torta con sabor a ${torta.ingrediente}.`);
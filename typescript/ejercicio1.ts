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

//1.3

let esPablo: boolean = true;        //asigno true para darle un valor


console.log('[Ejercicio 1.3]', `${esPablo ? 'Oh, hola Pablo' : 'Quien sos vos?'}`);

//1.4

let entero : number = 6;
const decimal : number= 6.66;
const hexadecimal : number= 0xf00d;
const binario : number = 0b1010011010;

const octal : number = 0o744;
const ceroNegativo : number = -0;
const enRealiadadNumero :number = NaN;
const mayorNumero : number = Number.MAX_VALUE;
const elNumeroMasGrande : number = Infinity;

 let miembros: number[] = [
 entero,
 decimal,
 hexadecimal,
 binario,
 octal,
 ceroNegativo,
 enRealiadadNumero,
 mayorNumero,
 elNumeroMasGrande
];

 miembros[0] = Number('12345');

 console.log('[Ejercicio 1.4]', miembros);

 //1.5

const secuencia: number[] = Array.from(Array(10).keys());
const animales: string[] = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
const cadenasYNumeros: (number|string)[] = [1, 'uno', 2, 'dos', 3, 'tres'];
const todosMisArreglos: any[] = [secuencia, animales, cadenasYNumeros];

console.log('Ejercicio 1.5', todosMisArreglos);
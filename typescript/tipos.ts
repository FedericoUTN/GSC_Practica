//1

function doStuff(value: any): void {
        if (typeof value === 'string') {
console.log(value.toUpperCase().split('').join(' '));
    } else if (typeof value === 'number') {
    console.log(value.toPrecision(5));
    }

    value; // coloque el cursor sobre `valor` aqui
    }
    
    doStuff(2);
    doStuff(22);
    doStuff(222);
    doStuff('hello');
    doStuff(true);
    doStuff({});
    
    console.log('[Ejercicio 4.1]');
    /*2.0000
22.000
222.00
H E L L O
[Ejercicio 4.1]
Los tres primeros hacen que value sea number, el siguiente string, luego boolean, el ultimo se puede asignar como any
*/
//2
//Dado el siguiente codigo:
interface EggLayer {
layEggs(): void;
}

interface Flyer {
fly(height: number): void;
}


interface Swimmer {
swim(depth: number): void;
}

// agregar alias de tipo(s) aqui

class Bird implements Flyer, EggLayer {
constructor(public species: string) { }

swim(depth: number): void {
    console.log(`No es Ave`);
    }

layEggs(): void {
console.log('Poniendo huevos de aves.');
}

fly(height: number): void {
console.log(`Volando a la altura de ${height} metros.`);
}
};

class Fish implements Swimmer, EggLayer {
constructor(public species: string) { }

fly(height: number): void {
    console.log(`No es pescado`);
    }

layEggs(): void {
console.log('Poniendo huevos de pescado.');
}

swim(depth: number): void {
console.log(`Nadando a una profundidad de ${depth} metros.`);
}
}

function getRandomAnimal():any {
const animals = [
new Bird('puffin'),
new Bird('kittiwake'),
new Fish('sea robin'),
new Fish('leafy seadragon'),
];

return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal(animal = getRandomAnimal()) {
animal.swim(10); // se llama solo si es un pez
animal.fly(10); // se llama solo si es un pajaro

return animal.species;
}

console.log('[Ejercicio 4.4]',
`Tenemos un ${interrogateAnimal()} en nuestras manos!`);
//Restrinja el tipo de ‘valor‘ a ‘string o number‘


//3

function padLeft(value: string, padding: number | string): string {
// si padding es un numero, 
if(typeof padding === "number"){
    return `${Array(padding + 1).join(' ')}${value}`;
}
else if(typeof padding === "string"){
    return padding + value;
}
else return '';
}

console.log('[Ejercicio 4.2]', `
${padLeft('', 0)}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
`);

//4
const numbers: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten<T>(array: T[]): T[] {
const flattened: T[] = [];

for (const element of array) {
if (Array.isArray(element)) {
element; // any[]
flattened.push(...element);
} else {
element; // any
flattened.push(element);
}
}

return flattened;
}

const flattenedNumbers: (number | number[])[] = flatten<(number | number[])>(numbers);
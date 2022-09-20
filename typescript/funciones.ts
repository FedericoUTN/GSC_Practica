
//1
/*
function add(x :number, y: number) {
    return x + y;
    }
    
    function sumArray(numbers: number[]) : number {
    return numbers.reduce(add, 0);
    }
    
    const someSum = sumArray([+'3', +'6', +'9']);
    
    console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);

//2
const bankAccount = {
    money: 0,
    deposit(value : number, message? : string) : void {
    this.money += value;
    if (message) {
    console.log(message);
    }
    }
    };
    
    bankAccount.deposit(20);
    bankAccount.deposit(10, 'Deposit received')
    
    console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);
*/
//3
function computeScore(word : string) : number {
    const letters : string[] = word.toUpperCase().split('');
    return letters.reduce((accum : number, curr : string) => accum += getPointsFor(curr), 0);
    }

    function getPointsFor(letter : string) : number {
    const lettersAndPoints : [string, number][] = [
    ['AEOIULNRST', 1],
    ['DG', 2],
    ['BCMP', 3],
    ['FHVWY', 4],
    ['K', 5],
    ['JX', 8],
    ['QZ', 10],
    ];
    
    return lettersAndPoints.reduce((computedScore : number, pointsTuple : [string, number]) => {
    const [letters, score] = pointsTuple;
    if (letters.split('').find((ll : string) => ll === letter)) {
    return computedScore += score;
    }
    return computedScore;
    }, 0);
    }
    
    console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoo')} puntos.`);
    
//4
    
function greet(greeting? : string) : string {
    if(greeting){
        return greeting.toUpperCase();
    }
    else return "hola"
}
const defaultGreeting = greet();
const portugueseGreeting = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);

//5
function layEggs(quantity : number = 0 , color : string = "blanco") : void {
    console.log(
    `[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
}
layEggs();

//6

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

capitalize = function (value: string): string {
return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

multiply = function (x: number, y: number): number {
return x * y;
}

console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));

//7
const booleanCollection: boolean[] = [];
const numberCollection: number[] = [];
const stringCollection: (string | [])[] = [];

function pushToCollection<T>(item : T, collection : T[]) {
    
collection.push(item);
return collection;
}

// Anadir algunas cosas a las colecciones
pushToCollection(false, booleanCollection);
pushToCollection('hi', stringCollection);
pushToCollection([], stringCollection);

pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);

pushToCollection(3, numberCollection);

const incrementedByTwo: number[] = numberCollection.map((num: number) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);
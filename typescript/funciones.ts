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
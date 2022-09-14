//1
function doStuff(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase().split('').join(' '));
    }
    else if (typeof value === 'number') {
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
// agregar alias de tipo(s) aqui
var Bird = /** @class */ (function () {
    function Bird(species) {
        this.species = species;
    }
    Bird.prototype.swim = function (depth) {
        console.log("No es Ave");
    };
    Bird.prototype.layEggs = function () {
        console.log('Poniendo huevos de aves.');
    };
    Bird.prototype.fly = function (height) {
        console.log("Volando a la altura de ".concat(height, " metros."));
    };
    return Bird;
}());
;
var Fish = /** @class */ (function () {
    function Fish(species) {
        this.species = species;
    }
    Fish.prototype.fly = function (height) {
        console.log("No es pescado");
    };
    Fish.prototype.layEggs = function () {
        console.log('Poniendo huevos de pescado.');
    };
    Fish.prototype.swim = function (depth) {
        console.log("Nadando a una profundidad de ".concat(depth, " metros."));
    };
    return Fish;
}());
function getRandomAnimal() {
    var animals = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
    ];
    return animals[Math.floor(Math.random() * animals.length)];
}
function interrogateAnimal(animal) {
    if (animal === void 0) { animal = getRandomAnimal(); }
    animal.swim(10); // se llama solo si es un pez
    animal.fly(10); // se llama solo si es un pajaro
    return animal.species;
}
console.log('[Ejercicio 4.4]', "Tenemos un ".concat(interrogateAnimal(), " en nuestras manos!"));
//Restrinja el tipo de ‘valor‘ a ‘string o number‘

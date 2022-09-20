//1
class MC {
    greet(event : string = 'party'): string {
    return `Bienvenido al ${event}`;
    }
    }
    
    const mc = new MC();
    console.log('[Ejercicio 5.1]', mc.greet('espectaculo'));

//2
class Person {
    constructor(private name : string, private age : number) {
    this.name = name;
    this.age = age;
    }
    getName(): string{
        return this.name;
    }
    }
    
    const jane = new Person('Juan', 31);
    
    console.log('[Ejercicio 5.2]', `El nombre de la nueva persona es ${jane.getName()}.`);
//3
class Employee {
   
    constructor(public title: string, public salary: number) {
  
    }
}
const employee = new Employee('Ingeniero', 100000);

console.log('[Ejercicio 5.3]', `El titulo del nuevo empleado es ${employee.title} y gana $ ${employee}`);
//4

abstract class Animal {
    constructor(public name : string) { }
    move(meters : number) : void {
    console.log(`${this.name} se movio ${meters}m.`);
     }
     }
    
    class Snake extends Animal {
    move(meters : number = 5) : void{
    super.move(meters);
    console.log('Deslizandose...');
     // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
     // de 5 metros
     }
     }
    
    class Pony extends Animal {
    move(meters : number = 60) : void {
    super.move(meters);
    console.log('Galopando...');
    // debe invocar al metodo `move` del padre con un galope predeterminado
     // de 60 metros
     }
     }
    
     // La clase Animal no debe ser instanciable.
     // Eliminar o comentar una vez que se logra el error deseado.
     //const andrew = new Animal("Andrew el Animal"); 
     //andrew.move(5);
    
    const sammy = new Snake("Sammy la serpiente");
    sammy.move();
    console.log(sammy.name); // debe devolver error
    
    const pokey = new Pony("Pokey el pony");
    pokey.move(34);
    console.log(pokey.name); // Should devolver error

//5
class Furniture {
    constructor(protected manufacturer: string = 'IKEA') { }
  
    }
    
    class Desk extends Furniture {
    kind() {
    console.log('[Ejercicio 5.5]', `Este es un escritorio hecho por ${this.manufacturer}`);
    }
    }
    
    class Chair extends Furniture {
    kind() {
    console.log('[Ejercicio 5.5]', `Esta es una silla hecha por ${this.manufacturer}`);
    }
    }
    
    const desk = new Desk();
    desk.kind();
    desk.manufacturer; // debe devolver error
    
    const chair = new Chair();
    chair.kind();
    chair.manufacturer; // debe devolver error

//6

class Student {
    public static school: string = 'Harry Herpson High School';
    constructor(private name: string) { };
    introduction() {
    console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${Student.school}`);
    }
    }
    
    const student = new Student('Morty');
    console.log(Student.school);
    student.introduction();

    
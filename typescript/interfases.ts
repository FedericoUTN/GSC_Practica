//1
interface CartItem{
    id: number;
    titulo: string; 
    idVariante?: number;
}

function agregarAlCarro(item: CartItem) {
    console.log('[Ejercicio 2.1]', `Agregando "${item.titulo}" al carro de compras.`);
    }
    
    agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero' });

//2
interface PersonData{
    nombre : string;
    edad : number;

}

class Persona implements PersonData {
    constructor(public nombre: string, public edad: number) { }
    }

    const juan = new Persona('Juan', 31);
    
    console.log('[Ejercicio 2.2]', `${juan.nombre} tiene ${juan.edad} anios.`);
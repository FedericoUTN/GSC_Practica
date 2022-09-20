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

//3
// [no editar] (pretender que esto proviene de una version externa de la
// biblioteca `foo.d.ts`)
 interface Ciudad {
 nombre: string;
 coords : Coords;
 }
 // [/no editar]
 interface Coords{
latitud : number;
longitud : number;
 }

 const montreal = {
 coords: {
 latitud: 42.332,
 longitud: -73.324,
 },
 nombre: 'Montreal',
 };

 const tampa = {
 coords: {
 latitud: +'27.9478',
 longitud: +'-82.4584',
 },
 nombre: 'Tampa',
 };

 function informacionCiudad(ciudad: Ciudad) {
 const coords =
 `(${ciudad.coords.latitud.toFixed(3)}, ${ciudad.coords.longitud.toFixed(3)})`;
 return `${ciudad.nombre.toUpperCase()} se encuentra en ${coords}.`;
 }

 console.log('[Ejercicio 2.3]',
 `${informacionCiudad(montreal)} \n\n ${informacionCiudad(tampa)}`);

//4
interface EsquemaUsuario {
    readonly id: number;
    nombre: string;
    }
    
     class Usuario implements EsquemaUsuario {
     constructor(public nombre: string, readonly id: number) { }
     }
    
     const usuario = new Usuario('Perro', 1);
    
     console.log(usuario.id); // legible
    
     usuario.nombre = 'Harold'; // asignable
     usuario.id = 5; // no asignable
    
     console.log('[Ejercicio 2.4]', `Usuario:`, usuario)
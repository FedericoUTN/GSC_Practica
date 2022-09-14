enum Rol {
    Esperando,
    Ataque,
    Defenza,
    Escape,
    Ataque_Especial
};

 let estadoEnemigo: Rol = Rol.Esperando;

function combate(enemigo: Enemigo, estado: Rol): void{
    do{
        enemigo.accion(estado);
        estado = cambioEstado();
        console.log(`caballero ataca a ${enemigo.nombre}!`);
        enemigo.daño(Math.floor(Math.random() * (17 - 8) + 8));

    }while(enemigo.vida > 0)  
    console.log(`${enemigo.nombre} ...
    FIN.`);
}

function cambioEstado(): Rol{
    let auxnum = Math.random() * 10;
    if (auxnum < 3){
        return Rol.Esperando;
    }
    else if(auxnum < 5){
        return Rol.Defenza;
    }
    else if(auxnum < 8){
        return Rol.Ataque
    }
    else {
        return Rol.Ataque_Especial
    }
}

class Enemigo{
    constructor(public nombre: string,public vida: number){

    }
    daño(ataque: number): void{
        this.vida = this.vida - ataque;
        if(this.vida > 0){
            console.log(`${this.nombre} a sufrido daño por ${ataque} !`)
        } 
        else console.log(`${this.nombre} ha muerto...`)
    }
    accion(estado: Rol): void{
        switch(estado){
            case Rol.Esperando:{
                console.log(`${this.nombre} esta esperando...`);
                break;
            }
            case Rol.Defenza:{
                console.log(`${this.nombre} se defiende !`);
                break;
            }
            case Rol.Ataque:{
                console.log(`${this.nombre} ha atacado !`);
                break;
            }
            case Rol.Ataque_Especial:{
                console.log(`${this.nombre} utiliza su ATAQUE ESPECIAL !!!`);
                break;
            }
            case Rol.Escape:{
                console.log(`${this.nombre} ha escapado...`);
                break;
            }
                
        }
    }
}

let goblin: Enemigo = new Enemigo("Goblin", 60);
combate(goblin, estadoEnemigo);

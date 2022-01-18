/*
    ===== Código de TypeScript =====
*/
class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}
class Heroe extends PersonaNormal{
    constructor(
        public alterEgo: string,
        public edad: number, 
        nombre: string,
        direccion: string,
    ){
        super(nombre, direccion);
    }

    imprimirNombre():string{
        return this.alterEgo+" "+this.nombre;
    }
}

const iroman = new Heroe('Ironman', 45, 'Tony Start','New York, USA');
console.log(iroman);

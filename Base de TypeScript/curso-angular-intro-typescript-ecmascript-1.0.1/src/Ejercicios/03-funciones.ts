/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number{
    return a + b
}

const suma = (a: number, b: number):number => a+b

let resultado = suma(1, 2);

console.log(resultado);

function multiplicar(numero: number, base: number, otronumero?: number): number{
    return numero * base;
}

resultado = multiplicar(1, 2);

console.log(resultado);

interface PersonajeLOP{
    nombre: string;
    pv: number;
    mostrarHP: () => void; 
}

function curar(personaje: PersonajeLOP, cura: number):void{
    personaje.pv += cura;
}

const nuevoPersonaje: PersonajeLOP = {
    nombre: 'Strider',
    pv: 50,
    mostrarHP(): void{
        console.log('Puntos de vida: ', this.pv);
        
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();

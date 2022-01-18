/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero ={
    nombre: 'Diego'
}

const pasajero2: Pasajero ={
    nombre: 'Lola',
    hijos: ['Pedro Pablo', 'Virginia', 'Diego']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos: number = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
    
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);

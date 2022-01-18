/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto ={
    desc: 'Nokia',
    precio: 150
}

const tableta: Producto ={
    desc: 'iPad Air',
    precio: 350
}

export function calcularISV(productos: Producto[]): [number, number] {
    let total: number = 0;

    productos.forEach(({precio}) =>{
        total += precio
    })

    return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calcularISV(articulos);
/*
console.log('Total: ',total);
console.log('ISV: ',isv);
*/

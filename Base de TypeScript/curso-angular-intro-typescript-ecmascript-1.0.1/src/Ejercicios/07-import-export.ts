import { Producto, calcularISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Nokia',
        precio: 100
    },
    {
        desc: 'Samsun',
        precio: 150
    }
];

const [total, isv] = calcularISV(carritoCompras);

console.log('Total: ',total);
console.log('ISV: ',isv);
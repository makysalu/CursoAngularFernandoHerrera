/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T): T{
    return argumento;
}

let soyString: string = queTipoSoy<string>('Hola Mundo');
let soyNumero: number = queTipoSoy<number>(100);
let soyArreglo: number[] = queTipoSoy<number[]>([1,2,3,4,5,6,7,8]);
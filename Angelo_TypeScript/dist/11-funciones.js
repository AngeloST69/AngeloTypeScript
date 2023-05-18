"use strict";
// Funciones
function crearProducto(nombre, costo, genero, talla, stock, createdAt) {
    return {
        nombre,
        costo,
        genero,
        talla,
        stock,
        createdAt
    };
}
const producto1 = crearProducto("zapato deportivo", 70, "Hombre", "XL", null, new Date('02/02/93'));
console.log(typeof (producto1));
console.log(producto1);
console.log(producto1.createdAt);
// Argumentos opcionales
function crearProducto1(nombre, costo, createdAt, genero, talla, stock) {
    return {
        nombre,
        costo,
        createdAt,
        genero,
        talla,
        stock
    };
}
const producto2 = crearProducto1('Tacones con brillantes', 70, new Date('02/02/93'), 'Mujer', 'M', null);
console.log(typeof (producto2));
console.log(producto2);
console.log(producto2.createdAt);
// RETORNO EN LAS FUNCIONES
// FUNCIONES TIPO VOID
function imprimirNombre(yourName) {
    console.log(`Bienvenido ${yourName} a TS`);
}
imprimirNombre("Diego");
// FUNCIONES CON RETORNO
let resultado = 0;
function operacion1(a, b) {
    return resultado = a + b;
}
let ejemploFuncion = console.log(operacion1(45, 50));
// FUNCIONES CON VARIOS RETORNOS
function clasificador(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else if (c > a && c > b) {
        return c;
    }
    else {
        return "Los numeros son iguales";
    }
}
;
let clasificador1 = console.log(clasificador(6, 6, 6));

"use strict";
// STRINGS EN TS
// Strings con comillas simples
let string1 = 'Ejemplo de string con comillas simples';
let string2 = 'Uso de "Comillas dobles" dentro de las comillas simples';
// let string3 = 'Uso de 'Comillas dobles' dentro de las comillas simples';
console.log(string1);
console.log(string2);
// Strings con comillas dobles
let string3 = "Uso de comillas dobles";
let string4 = "Uso de 'comillas simples' dentro de comillas dobles";
// let string5 = "Uso de "comillas simples" dentro de comillas dobles";
console.log(string3);
console.log(string4);
// Strings con backticks
let string5 = `Uso de Backtick`;
let string6 = `Uso de Backtick
                                dentro de un solo string
                se puede mantener varias lineas
                                                son el uso de espacios
`;
console.log(string5);
console.log(string6);
//Concatenar con strings
let titulo = "Concatenacion con strings";
let concatenado = `El titulo de esta accion es: ${titulo}`;
console.log(concatenado);
(() => {
    let productTitle = "My amazing product";
    // productTitle = null;
    // productTitle = () =>{};
    // productoTitle = 123;
    productTitle = 'My amazing product changed';
    console.log('productTitle', productTitle);
    const productDescription = "I'm bla bla bla bl s asasasa";
    console.log('productDescription', productDescription);
});

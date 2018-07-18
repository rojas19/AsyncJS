
// const valor1 = 2;
// const valor2 = 3;

// //let sumaValores = valor1 + valor2;

// console.log(sumaValores(valor1, valor2));


// const valor3 = 5;
// const valor4 = 8;

// //sumaValores = valor3 + valor4;

// console.log(sumaValores(valor3, valor4));

// function sumaValores(val1, val2){
//     return val1+val2;
// }


const carro0 = {
    color: 'rojo',
    dobleTraccion : true, 
    puertas : 4
};

const carro1 = {
    color: 'azul',
    dobleTraccion : false, 
    puertas : 4
};
const carro2 = {
    color: 'blanco',
    dobleTraccion : false, 
    puertas : 2
};
const carro3 = {
    color: 'negro',
    dobleTraccion : true, 
    puertas : 2
};
const carro4 = {
    color: 'azul',
    dobleTraccion : true, 
    puertas : 4
};
const carro5 = {
    color: 'pink',
    dobleTraccion : true, 
    puertas : 4
};

const carros = [carro0, carro1, carro2, carro3, carro4];


// carros.forEach(function(item, index, self){

//     console.log(item, index, self);
//     console.log(item.color);
//     console.log(index);
//     console.log(self);
//     console.log("=======================");
// })

// let numeros = [122, 9 , 109, 63];

// numeros.forEach(function(item, index){
//     numeros[index] = modificar(item, function(valor){
//         return valor/2;
//     });
// });

console.log(carros);

carros.forEach(function(carro){
    console.log(carro);
    carro = modificar(carro, function(valor){
        valor.color = 'azul';
        return valor;
    })
    console.log(carro);
});

function modificar(valor, modificador){
    return modificador(valor);
}


console.log(carros);
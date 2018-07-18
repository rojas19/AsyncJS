// console.log('Hola mundo');
// console.log(document.getElementById('square-test'));
// console.log(document.getElementById('square-test').innerText);

// document.getElementById('square-test').addEventListener('click', function (){
//         document.getElementById('square-test').setAttribute("class", "blue-background");
//         // alert('Alguien hizo click');
        
//     }
// );

// document.getElementById('square-test').setAttribute("class", "red-background");

// let valor1 = 2;
// let valor2 = 3;
// let sumaValores = valor1 + valor2;

// console.log(sumaValores);

// let nombre = 'Rodolfo';
// const texto1 = `Hola ${nombre} `;
// const texto2 = 'mundo';

// console.log(texto1,texto2);
// console.log(texto1+texto2);

// var verdadero = true;
// var falso = false;

// console.log(verdadero,falso);

// let noDefinido;
// let nulo = null;

// console.log(noDefinido, nulo);

// var carro = {
//     color: 'rojo',
//     dobleTraccion : false, 
//     puertas : 4
// };

// console.log(carro, carro.puertas);

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

// console.log(carro0, carro1, carro2, carro3, carro4);

const carros = [carro0, carro1, carro2, carro3, carro4];

// console.log(carros.length);
// console.log(carros)

carros.push(carro5);

// console.log(carros.length);
// console.log(carros)

// console.log(carros[0]);
// console.log(carros[1]);
// console.log(carros[2]);
// console.log(carros[3]);
// console.log(carros[4]);
// console.log(carros[5]);

for(let i = 0; i < carros.length; i++){
    console.log(i,carros[i]);
}
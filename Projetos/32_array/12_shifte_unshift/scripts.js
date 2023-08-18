let carros = ["BMW", "Audi", "Vw", "Fiat"];

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift('Gurgel');

console.log(carros);
console.log(carros[0]);


//shift() remove um elemento no começo do array
//unshift() adiciona um elemento no começo do array 
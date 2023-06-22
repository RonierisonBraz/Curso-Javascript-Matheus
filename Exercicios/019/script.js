function retornaNumero(a) {
    return Math.floor(Math.random() * a) + 1;
    //Math.floor serve pra arredondar o numero do metodo random.
}

console.log(retornaNumero(10));
console.log(retornaNumero(100));
console.log(retornaNumero(200));

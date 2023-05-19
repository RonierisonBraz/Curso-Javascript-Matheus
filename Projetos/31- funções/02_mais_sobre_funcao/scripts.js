function mutiplicarTresNumero(x,y,z) {
    return x * y * z ;    
}

console.log(mutiplicarTresNumero(2,3,5));

const mult = mutiplicarTresNumero(5,4,8);

console.log("o valor de mult é " + mult);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true){
        console.log("pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}

podeDirigir( 19, true);
console.log(podeDirigir(25, true));
console.log(podeDirigir(44, 0));
console.log(podeDirigir(19, 1));
console.log(podeDirigir(17, false));

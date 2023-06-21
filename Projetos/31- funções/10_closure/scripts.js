function lembrarsoma(x) {
    return function(y){
        return x + y;
    }
}

let soma1 = lembrarsoma(2);

console.log(soma1(5));

let soma2 = lembrarsoma(5);

console.log(soma2(7));

function contador(i) {
  let cont = i;
  let somarContador = function () {
    console.log(cont);
    cont++;
  }
  return somarContador;      
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();

let meuContador2 = contador(1);
meuContador2();
meuContador2();
meuContador2();
meuContador2();


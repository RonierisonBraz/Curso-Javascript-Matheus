let pessoa = {
  nome: "ronierison"
}

let pessoa2 = pessoa;

let pessoa3 = {
  nome: "Roni"
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "Pedro";

console.log(pessoa.nome);

pessoa.nome = "maria"

console.log(pessoa2.nome);


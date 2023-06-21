function recursao(n) {

  if(n - 1 < 2){
    console.log("recursão parou");
  }else if(n % 2 != 0){
  console.log("Número impar");
  recursao(n - 1);
  } else {
    console.log("Nùmero par");
    recursao(n - 2);
  }
}

recursao(39);
recursao(10);
recursao(55);


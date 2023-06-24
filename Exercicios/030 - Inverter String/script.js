function reverseString(recebe){
  var invertida = recebe.split('').reverse().join('');
  return invertida;
}

console.log(reverseString("palavra"));
console.log(reverseString("thais"));
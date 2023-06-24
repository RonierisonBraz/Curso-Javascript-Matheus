function countVowels(str) {
  // Converter a string para letras minúsculas
  str = str.toLowerCase();

  // Definir um conjunto de vogais
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  // Inicializar a contagem de vogais
  var count = 0;

  // Percorrer cada caractere da string
  for (var i = 0; i < str.length; i++) {
    // Verificar se o caractere é uma vogal
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels('Hello'));  // 2
console.log(countVowels('OpenAI'));  // 3
console.log(countVowels('JavaScript'));  // 3

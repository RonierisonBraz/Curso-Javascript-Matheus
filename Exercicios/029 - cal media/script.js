function calculateAverage(numbers) {
    // Verifica se o array está vazio
    if (numbers.length === 0) {
      return 0;
    }
  
    // Calcula a soma dos números no array
    var sum = numbers.reduce(function (acc, num) {
      return acc + num;
    }, 0);
  
    // Calcula a média
    var average = sum / numbers.length;
  
    return average;
  }
  
  var numbers = [4, 8, 12, 6, 10];
  console.log(calculateAverage(numbers));  // 8
let number = 42; 
let divisoes = 0;

for (let i = 1; i <= number; i++) {
    
    if(number % i == 0){
        divisoes++
    }
    
}

if(divisoes == 2){
 console.log(`o numero ${number} é primo`);
}
else {
    console.log(`o numero ${number} não é primo`);
}

let age = 17;
let haveCnh = false;

if(age >= 18 && haveCnh == false){
    console.log("Você é de maior mais não é habilitado.");
}
else if(age >= 18 && haveCnh == true){
    console.log("Você é de maior e é habilitado.");
}
else{
    console.log("Você é de menor e não pode ter habilitação ainda.");
}

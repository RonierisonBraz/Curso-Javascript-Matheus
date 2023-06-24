function isPalindrome (palavra){
    palavra = palavra.toLowerCase();
    
    palavra = palavra.replace(/\s/g, '');
    
    if(palavra === palavra.split('').reverse().join('')){
        return true;
    }else {
        return false;
    }
}

console.log(IsPalindrome('radar'));
console.log(IsPalindrome('hello'));
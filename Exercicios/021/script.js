function verificaTipo(a) {
    return console.log(typeof(a));
}
verificaTipo("Ronierison");
verificaTipo(5);
verificaTipo(true);

//solução funciona mais como tinha que verificar tem que ser assim 

function verificarTipoDados(dados) {
    if(typeof dados === 'string'){
        console.log("Este dado é uma string");
    } else if(typeof dados === 'number'){
        console.log("Este dado é um numero");
    }else if(typeof dados === 'boolean'){
        console.log("Este dado é um Boleano");
    }
}
verificarTipoDados('teste');
verificarTipoDados(5);
verificarTipoDados(true);
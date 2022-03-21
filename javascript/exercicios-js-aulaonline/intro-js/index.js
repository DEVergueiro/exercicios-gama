// exercicio 1
var nomeCompleto ="Natã Falletti";

console.log("exe 1 =", nomeCompleto);

// exercicio 2

var numeroA = 10;
var numeroB = 15;
var resultado= numeroA * numeroB

console.log("exe 2 =", resultado);

// exercicio 3

function saudacao(){
    console.log("exe 3 = Oi eu sou Goku!")
}

saudacao();

// exercicio 4

function multiplicacao(numeroA, numeroB){
    console.log(numeroA * numeroB);
}

multiplicacao (10, 10);
multiplicacao (5, 5);

// exercicio 5

function podeDirigir(idade){
    if(idade >= 18) {
        console.log("você pode dirigir");  
    } else {
        console.log("Você não pode dirigir");
    }
}

podeDirigir (18);
podeDirigir (10);
podeDirigir (55);

// exercicio 6

for(var x=0; x <= 20; x++){
    console.log(x);
}

// exercicio 7

for (var x = 1; x <= 20; x+=2){
    console.log(x);
}

// exercicio 8

function tabuada(numero){
    for (var x = 1; x <= 10; x++) {
        console.log(numero * x);
    }
}

// exercicio 9

function converterEmHoras (minutos) {
    console.log(minutos / 60, "horas");
}

converterEmHoras(80);
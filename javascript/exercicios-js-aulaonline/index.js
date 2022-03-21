// Exercicio 1

var nomeCompleto = "Natã Falletti";
console.log(nomeCompleto);

// exercicio 2

var numeroA = 10;
var numeroB = 5;
var resultado = (numeroA * numeroB);
console.log(resultado);

// exercicio 3

function saudacao () {
    console.log('Oi eu sou Goku!');
}
saudacao ();

// exercicio 4

function multiplica(numeroA,numeroB) {
    console.log(numeroA * numeroB);    
}
multiplica(5,8)

// exericio 5

function podeDirigir(idade) {
    if (idade >=18) {
        console.log('Você Pode Dirigir!');
    }else {console.log('Você Não Pode Dirigir!');}
};
podeDirigir(15);

// execicio 6

// for (let index = 0; index < 21; index++) {
//     console.log(index);
// }

// exercicio 7

for (let i = 1; i <= 20; i+=2) {
    console.log(i);
}

// exercicio 8

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero * i);
    }
}
tabuada(8);

// exercicio 9

function converterEmHoras(minutos) {
    console.log(minutos / 60, 'horas');
}
converterEmHoras(100)
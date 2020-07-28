/*
var nome = 'Lopes';
var idade = 18;
var verdadeiro = true;

var nomeCompleto = "R F Lopes";

var lista = [10, 20, 30];
var objeto = {
    nome: "Rafael",
    sobrenome: "Lopes"
}

var x;


var num1 = 10;
var num2 = 6; // +, -, *, /, %

var resultado = num1 % num2;

console.log(resultado);
*/
/*
var idade = 70;

if( !(idade >= 18) || (idade <= 65)){ // >, <, >=, <=, ==, !=
    console.log("Voto Obrigatório!");
}else{
    console.log("Não é Obrigatório!");
}

/*
C1 C2 && ||
V  V  V  V
V  F  F  V
F  V  F  V
F  F  F  F
*/
/*
var mes = 7;

switch(mes){
    case 1: console.log("Janeiro");            
            break;
    case 2: console.log("Fevereiro");
            break;
    case 3: console.log("Março");
            break;
    case 4: console.log("Abril");
            break;
    default: console.log("Mês inválido!");
}


var diaDaSemana = "Segunda-feira";

diaDaSemana == "Domingo"
? console.log("hoje é dia de churrasco!") 
: console.log("hoje não é dia de churrasco :(")
*/
/*
var numero = 0;

while(numero < 3){
    console.log(numero);
    numero = numero + 1;//numero++
}


var numero = 3;

do{
    console.log(numero);
    numero = numero + 1;//numero++
}while(numero < 3);

for(var numero = 3; numero > 0; numero--){
    console.log(numero);
}
*/

var lista = [10, 20, 30];

var objeto = {
    Nome: "Rafael",
    Sobrenome: "Lopes"
}

for(var o in objeto){
    console.log(o+": "+objeto[o]);    
}

var idade = 18;
var  nome = "18";

var mat = [[1,2],[3,4]];

for(var i = 0; i < 2; i++){
    for(var j = 0; j<2; j++){
        console.log(mat[i][j]);
    }
}


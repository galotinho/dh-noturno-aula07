//console.log(dizerOla);
/*
parOuImpar(14);

function parOuImpar(numero){
    if(numero % 2 == 0){
        console.log("Numero "+numero+" é par!")
    }else{
        console.log("Numero "+numero+" é ímpar!")
    }
}
*/
/*
function dizerOi(nome) {
  console.log("Olá " + nome);
}

dizerOi("Rafael");
*/
// Função Anônima
/*
var dizerOla = function (nome) {
   return  "Olá "+ nome;
}

console.log(dizerOla("Rafael"));

 //Função com construtor, pouco utilizada e inseguro
var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");
*/

//Falar sbre hoisting da função normal

/*
function circunferencia (raio) {
    function diametro() { // função aninhada 
        return 2*raio;   // raio é uma variável da função pai
    }    
    return Math.PI * diametro(); // invocamos a função
}

console.log(circunferencia(2));
*/
/*

function a(callback){
  setTimeout( function(){    
    callback();
  }, 3000 );
  console.log( 'a vem primeiro');
}

function b(){
  console.log( 'b vem depois' );
}

a( b );

*/
/*

function dizerOi(nome) {
    console.log(this);
    console.log("Oi, " + nome);
}
  
//dizerOi("Rafael");

//dizerOi.call(null, "Arya"); //null
  
//dizerOi.apply({}, ["Maria"]); //null
  
*/
/* Função auto invocada
(function(){
  var a = 1;
  console.log(a);
})();
 
console.log(a); //só existe dentro do escopo
*/
/*
//declarando objetos
var obj = { 
  nome: "Jon", 
  sobrenome: "Snow", 
  idade: 16,
  apresentar: apresentacao
};

function apresentacao() {
  console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
}

console.log(obj.sobrenome);

obj.apresentar();
*/

//Prototype
/*
String.prototype.apagar = function() {
  return "";
}

console.log("oi".apagar());

*/
/* //Arrays

var stark = ["Rafael", "Lopes", "Ana"];
console.log(stark[0]);

var starks = [
  ["Ned", 40],
  ["Jon", 16],
  ["Rickon", 3]
];

var stark = {
  nome: "Ned",
  idade: 40
};

console.log(starks[0]);
*/


//var d = new Date();

//console.log(d);

//var d = new Date("2020-07-31");

//console.log(d);
//var d = new Date(1467827595397);

//console.log(d);


//String

var s = "The winter is coming. It's really coming!";

//console.log(s.length);
// console.log(s.toUpperCase().indexOf('COMING'));
// console.log(s.lastIndexOf('coming'));
//console.log(s.slice(4,10));
// console.log(s.slice(4,-8));
// console.log(s.substr(4,6));
// console.log(s.replace("winter","summer"));
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.concat("?", "!"));
//console.log(s.split(" "));

//console.log("Olá".concat(" Rafael", "!"));
/*
var nomes = "Ned,Jon,Robb,Sansa,Bran,Arya,Rickon";
var array = nomes.split(",");

console.log(array[6]);
*/
 //Array
//var array = "Ned Jon Robb Bran Rickon".split(' ');

//console.log(array.toString()); //converter em string separado por ,
//console.log(array.join(' : ')); //juntar com espaço e ,

// //coloca antes
//array.push("Sansa");
// //coloca no final
//array.unshift("Sansa");

//console.log(array);

// //retirar elemento
 //var elemento = array.pop();
 //elemento = array.shift();

 //console.log(elemento);
// console.log(array);

// //substituir o elemento
//array[1] = "Jon Snow";

// console.log(array);

// //extrair elementos do array
 //var slice = array.slice(3,5);
 //console.log(slice);

// //retirar e inserir elemeto, qual elemento, quantidade aser retirado após e e incluir mais
 /*var splice = array.splice(1,1,"Arya", "Sansa");
 console.log(splice);
 console.log(array);
*/
// array.splice(3,1); //posicao e numero de elementos a ser removido

// console.log(array);

// array = array.concat(splice, slice); //juntar arrays
// console.log(array);


// let array = [1, 5, 7]

//  array.forEach(function(value, index) {
//    console.log("No índice: " + index + " está o valor: " + value);
//  });


//  let array = [1, 5, 7]

//  array.map(function(numero) { //modificar elementos do array
//      	console.log(numero * 2);
//  });

// let array = [13, 18, 20]

//  console.log(array.filter(function(numero) {      
//          return (numero >= 18);         
//  }));
 

let array = [1, 5, 7]

console.log(array.reduce(function(total, numero) { //reduzir a um número
    	return total + numero;
}));


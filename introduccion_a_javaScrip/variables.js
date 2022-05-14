//caso 1
//estamos declarando e inicializando una variable 
let numero= 10 

if (numero ==10)
{ //let hace que las variables que estan creadas dentro de una estructura solo sean locales y no se pueden usar exteramente
    let numero=22
    console.log(numero);
}
console.log(numero);

//case 2 
//var es para crear variables globales 
var numero2=55
if (numero2==55)
{
    numero2=77
    console.log(numero2)
}
console.log(numero2);
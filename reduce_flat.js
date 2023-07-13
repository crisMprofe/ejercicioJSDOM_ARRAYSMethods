//REDUCE() método que ejecuta una función reductora sobre cada elemento del array devolviendo un único valor
/*el valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.*/

const numeros = [1, 2, 3, 4, 5];

const sumaTodos = numeros.reduce((acc, valorActual) => acc + valorActual);
//acc es el acumulador primera vuelta es 0
console.log(sumaTodos);

const arrayNum = [
    [0,1],
    [2,3],
    [4,5],
];
//aplanar la matriz es decir crear un vector
const soloNum = arrayNum.reduce((acu, actual) => acu.concat(actual));

console.log(soloNum);
//#2 aplano un array
const arrayVector =[].concat(...arrayNum);
console.log(arrayVector);

//FLAT()
//flat() aplano un array #3 este es nuevo
const flatSingle = arrayNum.flat();
console.log(flatSingle);

var arr1 = [1, 2, [3, 4]];
const arrN1 = arr1.flat();
// [1, 2, 3, 4]
console.log("uno:", arrN1);
var arr2 = [1, 2, [3, 4, [5, 6]]];
const arrN2 =arr2.flat();
// [1, 2, 3, 4, [5, 6]]
console.log("dos:",arrN2);
var arr3 = [1, 2, [3, 4, [5, 6]]];
const arrN3 =arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
console.log("tres:",arrN3);
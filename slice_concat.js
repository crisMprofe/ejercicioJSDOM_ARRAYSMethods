//SLICE devuelve una copia de una parte del array, se indica el último a traer en el rango que necesito,
// pero no lo incluye


const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0     [1      2]        3
const newArray = arr.slice(1, 3);

console.log(newArray);

//CONCAT unir uno o más arrays
const array1 = ["a", "b", "c","d"];
const array2 = ["e", "f", "g", "h", "i"];
const array3 = array1.concat(array2);
console.log(array3);

//Spread syntax:
const array4 = [...array1,...array2];
const array5 = [...array2,"-",...array1];
console.log(array4);
console.log(array5);
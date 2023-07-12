//MÉTODO MAP
const frutas = ["🍓","🍌", "🍏", "🍒"];

/*const nuevoArray = frutas.map((item) => {
    return item;//siempre se retorna algo en el map
});*/

const nuevoArray = frutas.map((fruta) => fruta)
 frutas.push("🍑");
/*const copiaArray = frutas;//recordar que al asignar y agregar con push se modifican ambos arrays
frutas.push("🍑")
console.log(copiaArray);*/

console.log(nuevoArray);
const usuarios =[
    {name : "Marcos", age: 26},
    {name : "Stefania", age: 20},
    {name : "Pablo", age: 29},
];
const nombres = usuarios.map((usuar) => usuar.name);
console.log(nombres);

const numero =[2,5,8,9,10,12,15];
const numxDos = numero.map((numer)=> numer * 2);
console.log(numxDos);
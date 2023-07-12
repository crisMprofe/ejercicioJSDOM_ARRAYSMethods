//MÉTODO FILTER  
//recordar que estos métodos no modifican el array original sino que devuelven uno nuevo
const frutas = ["🍓","🍌", "🍏", "🍒"];

const nuevoArray = frutas.filter((fruta) => fruta === "🍌")
 frutas.push("🍑");


console.log(nuevoArray);
const usuarios =[
    {id: 1, name : "Marcos", age: 26},
    {id: 2, name : "Stefania", age: 20},
    {id: 3, name : "Pablo", age: 29},
];
const users = usuarios.filter((usuar) => usuar.age >25);
console.log(users);
//no quiero mostrar/eliminar un usuario
const userss = usuarios.filter((usuario) => usuario.id !== 3);
console.log(userss);


const numero =[2,5,8,9,10,12,15];
const numxDos = numero.filter((numer)=> ((numer>9) && (numer%2)==0));
console.log(numxDos);//numero mayores a 9 y que sean pares
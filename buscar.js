//MÉTODO FIND BUSCAR  
//recordar que estos métodos no modifican el array original sino que devuelven uno nuevo
const frutas = ["🍓","🍌", "🍏", "🍒"];

const manzana = frutas.find((fruta) => fruta === "🍏")

console.log(manzana);

const usuarios =[
    {id: 1, name : "Marcos", age: 26},
    {id: 2, name : "Stefania", age: 20},
    {id: 3, name : "Pablo", age: 29},
];
const users = usuarios.find((usuar) => usuar.id === 2);
console.log(users);
//devuelve el primero que encuentra
//Utilizando destructuring, podemos destructurar, pero debe cumplirse siempre la condición
const {age} = usuarios.find((usuario) => usuario.id === 2);
console.log(age);

const numero =[2,5,8,9,10,12,15];
const numx = numero.find((numer)=> (numer>9));
console.log(numx);

//SOME
//de esta forma podemos validar sin dar error sino encuentra algo
const existe = usuarios.some((usuario)=> usuario.id === 2);
console.log(existe);

//FINDINDEX devuelve el indice según condicion sino -1
const indice = usuarios.findIndex((usuario)=> usuario.id === 2);
console.log(indice);
console.log(usuarios[indice]);

const indicee = usuarios.findIndex((usuario)=> usuario.id === 4);
console.log(indicee);

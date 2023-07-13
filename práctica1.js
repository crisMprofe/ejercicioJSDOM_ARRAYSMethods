const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll('.card .btn');

const carritoObjeto = [];

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);
    
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad:1,
    };

    const indice = carritoObjeto.findIndex((item)=> item.id === producto.id);

    console.log("ex",indice);

    if (indice === -1){
        carritoObjeto.push(producto);
    } else {
    // en caso contrario aumentamos su cantidad
    carritoObjeto[indice].cantidad++;
    };

    console.log(carritoObjeto);//verifico por consola
    seleccionCarrito(carritoObjeto);
};

const seleccionCarrito = (array) => {

    carrito.textContent = "";
    //ahora voy a recorrer el array
    array.forEach((item) =>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
}

//btnesBotones.forEach((btn) => console.log(btn));//se vería cada boton en console
btnesBotones.forEach((btn) => btn.addEventListener('click',agregarAlCarrito));



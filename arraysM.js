const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll('.card .btn');

/*Probando:
console.log(carrito);
console.log(template);
console.log(fragment);
console.log(btnesBotones);*/


const carritoObjeto = {
    
}

const agregarAlCarrito = (e) => {
   /* console.log(e.target);//pruebo que lo marque en consola
    console.log(e.target.dataset);//pruebo que lo marque accediendo a la clase data set cada identificador que le hemos dado*/
    console.log(e.target.dataset.fruta);//pruebo que lo marque accediendo a la clase data con set identificando cada uno con la palabra de acuerdo al elemento a seleccionar
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad:1
    }

    if (carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad=carritoObjeto[producto.titulo].cantidad+1;
    }
    //llevar esa info al carrito
    carritoObjeto[producto.titulo] = producto;
    //console.log(carritoObjeto);

    seleccionCarrito();//envio el que selecciono
};

const seleccionCarrito = () => {

    carrito.textContent = "";

    //console.log('seleccionar carrito', producto);//tengo que pasar por parámetro si quiero que lo muestre x consola

    Object.values(carritoObjeto).forEach((item) =>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
}



//btnesBotones.forEach((btn) => console.log(btn));//se vería cada boton en console
btnesBotones.forEach((btn) => btn.addEventListener('click',agregarAlCarrito));



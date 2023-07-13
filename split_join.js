//split(): El método split() divide un objeto de tipo String en un array, mediante un separador. Caso cuando se recibe una BD en texto.
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

//a la inversa, array a una cadena de caracteres, sino paso separador toma x defecto la ",".
const nuevoTexto = arrayMeses.join("-");
console.log(nuevoTexto);
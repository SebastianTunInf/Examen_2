let nombre_1 = prompt("Escribe el primer nombre.")
let edad_1 = prompt("Escribe su edad.")
let nombre_2 = prompt("Escribe el segundo nombre.")
let edad_2 = prompt("Escribe su edad.")
let nombre_3 = prompt("Escribe el tercer nombre.")
let edad_3 = prompt("Escribe su edad.")

switch (true) {
    case edad_1 > edad_2 && edad_1 > edad_3:
        console.log (`${nombre_1} es el más grande con ${edad_1} años.`)
        break;
    case edad_2 > edad_1 && edad_2 > edad_3:
        console.log (`${nombre_2} es el más grande con ${edad_2} años.`)
        break;
    case edad_3 > edad_1 && edad_3 > edad_2:
        console.log (`${nombre_3} es el más grande con ${edad_3} años.`)
        break;
    default:
        console.log ('Una de las edades es invalidad.')
        break;
}
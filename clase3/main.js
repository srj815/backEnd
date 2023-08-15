"use strict";
/* let nombre : string = "Pepe"

const edades : number[] = [30, 25, 60]

const nombres : string[] = ["pepetonio", "juan"]

const mix : [number, boolean] = [4, false]

const persona : {nombre: string, apellido: string} = {nombre: "juancito", apellido: "carrazo"}

const decirTipoDeDato = (dato : any) : void =>{
    console.log('El tipo de dato es: ' + typeof dato)
}

decirTipoDeDato(3)
decirTipoDeDato('hola')
decirTipoDeDato(false) */
//contarHasta : recibe un numero y muestra por consola los numeros que hay de 0 hasta el numero recibido
//calcularIva : recibe un precio y devuelve el iva del precio
/* const contarHasta = (num : number) : string => {
    console.log()
}
 */
const calcularIva = (numb) => {
    return numb * 0.21;
};
function mostrarNumeros(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}
mostrarNumeros(10);
const libros = [];
libros.push({ titulo: "Harry Potter", cantPaginas: 200, categoria: "Fantasia", autor: "JK Rowling" });
const productos = [];
productos.push({ nombre: "Manivela", precio: 250, id: 1, stock: 500, descripcion: "Manija para hacer cosas" });
const usersConnected = [];
usersConnected.push({ nombre: "pepito", ubicacion: "Buenos Aires", sistemaOperativo: "Linux" });
/* JS ORIENTADO A OBJETOS EN TS */
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.vida = 100;
    }
}
/* HERENCIA */
class Programador extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.teclado = 'loGitech 80%';
    }
    hacerTrabajo(cantHrs) {
        console.log("Hacer tiki tiki con teclado " + this.teclado + " por " + cantHrs + " horas.");
    }
}
const programador = new Programador("pepe", 20);
programador.hacerTrabajo(30);
const planillaDeEmpleados = [];

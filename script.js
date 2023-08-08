/* Creamos nuestro primer codigo de Node.js

Node.js se ejecuta en la computadora (lo ejecuta v8 de node) */

console.log("Hello world/Hola mundo")

/* 
TIPOS DE DATOS
Number, string, boolean, array, null, symbol, undefined, Object


OPERADORES ARITMETICOS
+ - / * %


OPERADORES LOGICOS
||, &&, !


COMPARDORES
!=, <, >, <=, >=, ==, ===


CONDICIONALES
if
else if
if
ternario : condicion ? if : else
switch


ESTRUCTURAS DE REPETICION
for
while
do...while
for...Of
for...in


METODOS DE STRING 
toLowerCase
toUpperCase
length
concat
repeat 
charAt 
includes
indexOf
split 


METODOS AVANZADOS DE ARRAY
map
forEach
find
filter
some
every
sort
reduce
findIndex


F U N C I O N E S

FUNCIONES FLECHA
const saludar = () => {
    console.log("Hola, estoy saludando")
}
saludar()

(() => {
    console.log("Hola, estoy saludando")
})()

FUNCIONES NOMBRADAS
function saludar2 (){
    console.log("Hola, estoy saludando")
}
saludar2()


OBJETOS
const persona = {nombre: "pepe", apellido:"grillo"}


P O O

FUNCTION CONSTRUCTORA ES5
funtion Persona (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

const persona1 = new Persona("pepe", "grillo")

console.log(persona1)

*/



class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.trabajos = []
    }
    agregarTrabajo(trabajo){
        this.trabajos.push(trabajo)
    }
}
class Trabajo {
    constructor(nombre, tiempoEstimado, remuneracion){
        this.nombre = nombre
        this.tiempoEstimado = tiempoEstimado
        this.remuneracion = remuneracion
    }
    contarTrabajo(){
        console.log(`${this.nombre} me tomara un tiempo estimado de ${this.tiempoEstimado} hrs y recibire $${this.remuneracion}`)
    }
}
const persona1 = new Persona('pepe', 'argento')
persona1.agregarTrabajo(new Trabajo('desarrollar un front', 30, 230000))
console.log(persona1.trabajos[0].contarTrabajo())




/* Crea la class proyecto con las sig propiedades
nombre: (p) string
precio: (p) numbrer
categoria: (p) string
duracionEstimada: (p) number
participantes: []
*/

class Proyecto{
    constructor(nombre, precio, categoria, duracionEstimada){
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.duracionEstimada = duracionEstimada
        this.participantes = []
    }
}

const proyecto1 = new Proyecto("pepe", "grillo", "a", 2 )

console.log(proyecto1)

/* 
Una vez creada la class proyecto se debera crear el metodo agregarParticipante ( participante)
A su vez crear la class Participante que tendra las propiedades (nombre, apellido, dinero (empieza en 0) y amigos (empieza en array vacio))


eliminarParticipante(nombre) el metodo eliminarParticipante recibe el nombre y elimina del array al participante

reestimarElProyecto(nueva estimacion) permitira cambiar el tiempo estimado del proyecto

nombrarParticipantes() por cada participante debera decir el nombre y apellido del participante

(Agregar la propiedad remuneracion al participante)
(Agregar el metodo a participante) pagar sueldo () incrementara su dinero por la remuneracion del participante

pagarSueldos() por cada participante activara el metodo pagar sueldo

*/
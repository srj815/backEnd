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
const calcularIva = (numb : number) : number =>{
    return numb * 0.21
}

function mostrarNumeros(numero : number) : void {
    for (let i = 0; i <= numero; i++) {
    console.log(i);
    }
}

mostrarNumeros(10);

/* ---------------------------------------------------------------- */

/* interface Persona{
    nombre: string,
    apellido: string,
    edad: number
}

const personas : Persona[] = []

personas.push({nombre: "pepe", apellido: "suarez", edad: 30}) */


/* Crear un array de objetos con interfaces

libros : Libro[] la interface Libro debe tener las props: titulo, cantPaginas, categoria, autor

productos: Pruducto[] la interface Producto debe tener las props: nombre, precio, id, stock, descripcion

usersConnected : User[] la interface User debe tener las props: nombre, ubicacion, sistemaOperativo 

*/

interface Libro{
    titulo: string,
    cantPaginas: number, 
    categoria: string, 
    autor: string
}

interface Producto{
    nombre: string, 
    precio: number, 
    id: number, 
    stock: number, 
    descripcion: string
}

interface User{
    nombre: string, 
    ubicacion: string, 
    sistemaOperativo: string
}


const libros : Libro[] = []

libros.push({titulo: "Harry Potter", cantPaginas: 200, categoria: "Fantasia", autor: "JK Rowling"})

const productos : Producto[] = []

productos.push({nombre: "Manivela", precio: 250, id: 1, stock: 500, descripcion: "Manija para hacer cosas"})

const usersConnected : User[] = []

usersConnected.push({nombre: "pepito", ubicacion:"Buenos Aires", sistemaOperativo: "Linux"})






/* JS ORIENTADO A OBJETOS EN TS */

class Persona{
    nombre: string
    edad: number
    vida: number
    constructor(nombre: string, edad: number){
        this.nombre = nombre
        this.edad = edad
        this.vida = 100
    }
}

/* HERENCIA */

class Programador extends Persona{
    teclado: string
    constructor(nombre: string, edad: number){
        super(nombre, edad)
        this.teclado = 'loGitech 80%'
    }
    hacerTrabajo(cantHrs: number):void{
        console.log("Hacer tiki tiki con teclado " + this.teclado +" por " + cantHrs +" horas.")
    }
}

const programador : Programador = new Programador("pepe", 20)

programador.hacerTrabajo(30)

const planillaDeEmpleados : Programador[] = []



/* 
Practica de herencia 
Crear una clase llamada Entidad con las propiedades:

-nombre
-vida
-danio

y los metodos

presentarse => mostrara por consola 'Hola, mi nombre es nombre'

atacar(objetivo : string) => mostrara por consola 'nombre ataco a objetivo y le inflingio danio daño'

obtenerVida( ) => devolvera la vida actual de la entidad


A partir de la clase Entidad

crear la clase Zombie

nuevas propiedades:

fechaDeMuerte:string

nuevos metodos:
revivir() si la vida es negativa o 0, regenerara la vida a 25 y dira por consola 'REEESURRECIION'


*/



class Entidad{
    nombre: string
    danio: number
    vida: number
    constructor(nombre: string, danio: number){
        this.nombre: nombre
        this.danio: danio
        this.vida: 1000
    }

    presentarse (): void {
        console.log(`Hola mi nombre es ${this.nombre}`)
    }

    atacar (objetivo : string) : void {
        console.log(`${this.nombre} atacó a objetivo y le inflingió ${this.danio} de daño`)
    }

    obtenerVida  () : number {
        return this.vida
    }


}


class Zombie extends Entidad{
    fechaDeMuerte: string
    constructor(nombre: string, danio: number, fechaDeMuerte: string){
        super(nombre, danio)
        this.fechaDeMuerte = fechaDeMuerte
    }
    revivir () : void {
        if(this.vida <= 0 ){
            this.vida = this.vida + 25
            console.log("RESURRECCION")
        }
    }
}
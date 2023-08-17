/* 
Practica de POO con TS

Generar la class Product
Propiedades:
title: string
price: number
stock: number
id: string


Generar la class Cart 
Propiedades:
cart: Product[]
id: number

Generar una clase llamada CartManager:
Propiedades: 
-carts (empieza como arr vacio) : Cart[]
-id (0)

Metodos:

createCart() => creara un carrito con las propiedades cart (empieza como array vacio) y id (cada nuevo carrito debera tener un id distinto)

getCartById(cid) => recibira un cartId y devolvera el carrito buscado sino devuelve null

addProductCart(cid, product, quantity) => recibira un cartId y un product : Product y una cantidad : number,
Si el producto ya existe en el carrito: 

-Incrementara la quantity del producto ya existente por la quantity pasada por parametro

Sino:

-Agregara la propiedad quantity a el product y a ese product lo agregara al array del carrito cuyo id sea identico al cid pasado por parametro.

getTotalCart(cid) => recibira un cartId y devolvera un total numerico que sera la suma de todos los precios por la cantidad en la prop cart Product[]


*/



class Product{
    title: string
    price: number
    stock: number
    id: string
    constructor(title: string, price:number, stock: number, id: string) {
        this.title = title
        this.price = price
        this.stock = stock
        this.id = id 
    }
}

class Cart{
    cart: Product[]
    id: number
    constructor(id: number){
        this.cart = []
        this.id = id
    }
}

class CartManager{
    carts: Cart[]
    id: number
    constructor(){
        this.carts = []
        this. id = 0
    }

    createCart () : void {
        this.carts.push(new Cart(this.id++))
    }

    getCartById (cid: number) : Cart | null {
        const cartFound : Cart | undefined = this.carts.find((cart : Cart) : boolean => cart.id === cid)
        return cartFound ? cartFound : null
        /* y queda mas lindo haciedo:
            return cartFound || null */
    }

    addProductCart(cid: number, product: Product, quantity: number) : void {
        const cartFound : Cart | null = this.getCartById(cid)
        if(cartFound){
            this.carts.map(cart => {cart.id == cid})
        }
    }

    getTotalCart(cid: number) : number {
        const total : number = (Cart.this.price += Cart.this.price) * 
    }

}


const managerCarts = new CartManager()

managerCarts.createCart()
managerCarts.createCart()
managerCarts.createCart()

console.log(managerCarts.carts)

console.log(managerCarts.getCartById(9))
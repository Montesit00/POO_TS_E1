export interface Figura {
    calcularArea(): number
}

//creo la clase cuadrado y defino su constructor(lado)
export class Cuadrado implements Figura {
    constructor (private lado: number) {}
    
    //calcular el area del cuadrado
    calcularArea () {
        return this.lado ** 2
    }
}

//creo la clase circulo y defino su constructor(radio)
export class Circulo implements Figura {
    constructor (private radio: number) {}
  
    //calcular el area de un circulo
    calcularArea () {
        return Math.PI * (this.radio ** 2)
    }
}

//creo la clase triangulo y defino su constructor(base y altura)
export class Triangulo implements Figura {
    constructor (public base: number, public altura: number) {}

    //calcular el area de un triangulo
    calcularArea (): number {
        return (this.base * this.altura) / 2
    }
}
  
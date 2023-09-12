import { Figura, Circulo, Cuadrado, Triangulo } from "./Figura";

export class Calculadora {
    constructor (private figura: Figura) {}

    //calcular el area de la figura proporcionada
    calcular(){
        return  this.figura.calcularArea()
    }
}

// Calculo las diferentes figuras
const cuadrado = new Calculadora(new Cuadrado(30))
const triangulo = new Calculadora(new Triangulo(30, 50))
const circulo = new Calculadora(new Circulo(30))

console.log(cuadrado.calcular())
console.log(triangulo.calcular())
console.log(circulo.calcular())
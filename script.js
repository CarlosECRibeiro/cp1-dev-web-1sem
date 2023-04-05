//exercicio 1
let num 
document.write (num)
document.write("<br><br>")

//exercicio 2

let num1 = 10
let num2 = 2
let num3 = (num1 % num2)
document.write (num3)
document.write("<br><br>")

//exercicio 3

let peso = prompt("digite seu peso")
let altura = prompt("digite sua altura")
let imc = (peso / altura)

if (imc < 18,5){

    document.write("abaixo do peso")
    document.write("<br><br>")

}

else if(imc >= 18,5 || imc <= 24,9){

    document.write("peso ideal")
    document.write("<br><br>")

} 

else if(imc > 24,9){

document.write("acima do peso")
document.write("<br><br>")

}

//exercicio 4

let idade = prompt("digite sua idade")

if (idade <= 12){

    document.write("você é uma criança")
    document.write("<br><br>")

}

else if (idade > 12 || idade <= 18){

    document.write("voce é um adolescente")
    document.write("<br><br>")

}

else if (idade > 18 || idade <= 60){

    document.write("voce é um adulto")
    document.write("<br><br>")

}

else if (idade > 60){

    document.write("voce é um idoso")
    document.write("<br><br>")

}
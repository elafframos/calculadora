let res = document.querySelector('.res')

function calculo(num){
    let numero = res.innerHTML
    res.innerHTML = numero + num
}

function apagar(){

   let resultado = res.innerHTML
   res.innerHTML = resultado.substring(0, resultado.length - 1)
}

function zerar(){
    res.innerHTML = ''
}

function calcular(){
    let resultado = res.innerHTML
    if(resultado) {
        res.innerHTML = eval(resultado)
    }
    
}
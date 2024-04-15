function insert(insert){
    let numero = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML = numero+insert
}
function apagar(){
    let numero = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML = numero.substring(0,numero.length-1)
}
function excluir(){
    document.getElementById("res").innerHTML = "";
}
function calcular(){
    let numero = document.getElementById("res").innerHTML;
    if(numero){
        document.getElementById("res").innerHTML = eval(numero)
    }
}
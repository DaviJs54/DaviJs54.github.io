function number(n){
    tela = parseInt(document.getElementById("r").textContent)
    if(document.getElementById("d").textContent == ""){
        if(tela != 0){
            document.getElementById("r").innerHTML += n
        }
        else{
            document.getElementById("r").innerHTML = n
        }
    }
    else{
        if(tela == 0){
            document.getElementById("r").innerHTML = n
        }
        else{
            document.getElementById("r").innerHTML += n
        }
    }
}
function c(){
    document.getElementById("r").innerHTML = "0"
    document.getElementById("d").innerHTML = ""
}
function divisao(){
    tela = parseFloat(document.getElementById("r").textContent)
    document.getElementById("d").innerHTML = tela + "÷"
    op = 1
    document.getElementById("r").innerHTML = 0
}
function vezes(){
    tela = parseFloat(document.getElementById("r").textContent)
    document.getElementById("d").innerHTML = tela + "x"
    op = 2
    document.getElementById("r").innerHTML = 0
}
function menos(){
    tela = parseFloat(document.getElementById("r").textContent)
    document.getElementById("d").innerHTML = tela + "-"
    op = 3
    document.getElementById("r").innerHTML = 0
}
function mais(){
    tela = parseFloat(document.getElementById("r").textContent)
    document.getElementById("d").innerHTML = tela + "+"
    op = 4
    document.getElementById("r").innerHTML = 0
}
function ponto(){
    document.getElementById("r").innerHTML += "."
}
function del(){
    numero = document.getElementById("r").textContent
    if(numero != 0){
        numeronovo = numero.slice(0, -1)
        document.getElementById("r").innerHTML = numeronovo
    }
}
function resposta(){
    if(document.getElementById("d").textContent != ""){
        tela = parseFloat(document.getElementById("r").textContent)
        telacima = parseFloat(document.getElementById("d").textContent)
        document.getElementById("d").innerHTML = ""
        if(op == 1){
            if(tela == 0){
                document.getElementById("r").innerHTML = "0"
            }
            else{
                document.getElementById("r").innerHTML = telacima / tela
            }
        }
        else if(op == 2){
            document.getElementById("r").innerHTML = telacima * tela
        }
        else if(op == 3){
            document.getElementById("r").innerHTML = telacima - tela
        }
        else if(op == 4){
            document.getElementById("r").innerHTML = telacima + tela
        }
    }
}
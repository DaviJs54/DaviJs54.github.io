l = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
vez = 0
velha = 1
flag = 0

function limpar(){
    document.getElementById("frase").innerHTML = " "
    l = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    for(x = 1; x < 10; x ++){
        document.getElementById("q" + x).innerHTML = " "
    }
    flag = 0
}
function clicked(n){
    if(flag == 1){
        return
    }
    velha = 1
    if(document.getElementById("frase").textContent != " "){
        l = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    }
    document.getElementById("frase").innerHTML = " "
    if(vez == 0){
        if(l[n] == " "){
            l[n] = "x"
            document.getElementById("q" + (n+1)).innerHTML = "X"
            vez = 1
        }
    }
    else{
        if(l[n] == " "){
            l[n] = "o"
            document.getElementById("q" + (n+1)).innerHTML = "O"
            vez = 0
        }
    }
    for(x = 0; x < 9; x+=3){
        if(l[x] == l[x+1] && l[x+1] == l[x+2] && l[x] == l[n]){
            document.getElementById("frase").innerHTML = '"' + l[n] + '"'  + " ganhou"
            flag = 1
        }
    }
    for(y = 0; y < 3; y++){
        if(l[y] == l[y + 3] && l[y + 3] == l[y + (3*2)] && l[y] == l[n]){
            document.getElementById("frase").innerHTML = '"' + l[n] + '"'  + " ganhou"
            flag = 1
        }
    }
    for(x = 0; x < 3; x += 2){
        if(l[x] == l[4] && l[4] == l[8 - x] && l[x] == l[n]){
            document.getElementById("frase").innerHTML = '"' + l[n] + '"'  + " ganhou"
            flag = 1
        }
    }
    if(flag == 1){
        return n
    }
    for(x = 0; x < l.length; x++){
        if(l[x] == " "){
            velha = 0
            break
        }
    }
    if(velha == 1){
        document.getElementById("frase").innerHTML = ("deu velha")
        flag = 1
        velha = 0
    }
}
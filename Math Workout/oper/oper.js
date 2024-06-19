
oper = document.getElementById("operacao").textContent
function create(){
    if(oper == "+"){
        n1 = Math.floor(Math.random() * 100)
        n2 = Math.floor(Math.random() * 100)
    }
    else if(oper == "-"){
        n2 = Math.floor(Math.random() * 100)
        n1 = Math.floor((Math.random() * 100) + n2)
    }
    else if(oper == "x"){
        n2 = Math.floor(Math.random() * 20)
        n1 = Math.floor(Math.random() * 20)
    }
}
create()
document.getElementById("quest").innerHTML = n1 + " " + oper + " " + n2
function number(n){
    ans = document.getElementById("answer").textContent
    if(ans.length < 11){
        document.getElementById("answer").innerHTML += n
    }
    ans = document.getElementById("answer").textContent
    if(oper == "+"){
        realans = n1 + n2
    }
    else if(oper == "-"){
        realans = n1 - n2
    }
    else if(oper == "x"){
        realans = n1 * n2
    }
    if(ans == realans){
        create()
        document.getElementById("answer").style.border = "1px solid rgb(0, 119, 255)"
        document.getElementById("answer").innerHTML = "",500
    }
    else{
        document.getElementById("answer").style.border = "1px solid red"
    }
    document.getElementById("quest").innerHTML = n1 + " " + oper + " " + n2
}
function del(){
    ans = String(document.getElementById("answer").textContent)
    ans = ans.slice(0, -1)
    document.getElementById("answer").innerHTML = ans
}
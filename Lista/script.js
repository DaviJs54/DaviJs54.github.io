itens = []
function add(){
    if(document.getElementById("item").value == ""){
        return
    }
    itens.push(document.getElementById("item").value)
    document.getElementById("itens").innerHTML = itens
    document.getElementById("item").value = ""
}
function remove(){
    itens.pop()
    document.getElementById("itens").innerHTML = itens
}
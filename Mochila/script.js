mochila = []
edit = 0
document. addEventListener('keypress', function(event) { if (event. key === 'Enter' && edit == 0) { 
    adicionarItem()
    editarItem(op)
} });
document. addEventListener('keypress', function(event) { if (event. key === 'Enter' && edit == 1) { 
    editarItem(op)
} });
function verItens(){
    document.getElementById('capacidade').innerHTML = '('+mochila.length+'/8 itens)'
    document.getElementById('item').value = ''
    html = ''
    for(i=0; i<mochila.length; i++){
        html += `<div id="oitem">
                    <div id="item`+i+`">`+mochila[i]+`</div>
                    <div id="botoes">
                        <button onclick="editarItem(`+i+`)">🛠</button>
                        <button onclick="removerItem(`+i+`)">✖</button>
                    </div>
                </div>`
    }
    document.getElementById('itens').innerHTML = html
}

function adicionarItem(){
    item = document.getElementById('item').value
    
    if(validarItem(item)){
        if(mochila.length < 8){
            mochila.push(item)
            verItens()
        }else{
            alert('A mochila está cheia.')
        }
    }
    
}

function removerItem(i){
    edit = 0
    mochila.splice(i,1)
    verItens()
}

function editarItem(i){
    op = i
    if(document.getElementById('item'+i).innerHTML == mochila[i]){
        edit = 1
        verItens()
        document.getElementById('item'+i).innerHTML = '<input id="editado" type="text" value="'+mochila[i]+'">'
    }
    else{
        item = document.getElementById('editado').value
        if(item == mochila[i]){
           edit = 0
            verItens()
        }
        else if(validarItem(item) == true){
            mochila[i] = item
            edit = 0
            verItens()
        }
    } 
}

function validarItem(item){
    if(item == ''){
        alert('Campo vazio')
        return false
    }
    else if(mochila.indexOf(item) != -1){
        alert('Este item já está na lista.')
        return false
    }
    else if(item.length > 0 && item[0] == ' '){
        alert('Digitação inválida.')
        return false
    }
    else if(item.length > 10){
        alert('Item muito grande.')
        return false
    }
    else{
        return true
    }
}
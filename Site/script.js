pessoas = []

telaLogin()

function telaCadastro(){
    document.getElementById('cadastro').style.display = 'flex'
    document.getElementById('login').style.display = 'none'
    document.getElementById('info').innerHTML = ''
}

function telaLogin(){
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('login').style.display = 'flex'
    document.getElementById('info').innerHTML = ''
}

function cadastrar(){

    _nome = document.getElementById('nome').value
    _idade = parseInt(document.getElementById('idade').value)
    _email = document.getElementById('email').value
    _senha = document.getElementById('senha').value
    _senhaconf = document.getElementById('senhaconf').value

    validarCadastro()

    if(erros.length == 0){

        pessoa = {
            nome: _nome,
            idade: _idade,
            email: _email,
            senha: _senha,
        }
        pessoas.push(pessoa)

        document.getElementById('info').innerHTML = '<div>Cadastro realizado com sucesso!<div>'

    }else{

        document.getElementById('info').innerHTML = '<div>'+erros.join('</div><div>')+'</div>'

    }
    
}
function entrar(){
    _nome = document.getElementById('nome2').value
    _senha = document.getElementById('senha2').value
    
    if(_nome == '' && _senha == ''){
        document.getElementById('info').innerHTML = '<div>Campos Vazios.<div>'
    }
    else if(_senha == ''){
        document.getElementById('info').innerHTML = '<div>Insira a senha.<div>'
    }
    else if(pessoas.length == 0){
        document.getElementById('info').innerHTML = '<div>Usuário inexistente ou senha incorreta.<div>'
    }
    else{
        for(i = 0; i < pessoas.length; i++){
            if(_nome == pessoas[i].nome){
                if(_senha == pessoas[i].senha){
                    document.getElementById('info').innerHTML = '<div>Você entrou!<div>'
                }
                else{
                    document.getElementById('info').innerHTML = '<div>Senha incorreta.<div>'
                }
            }
            else{
                document.getElementById('info').innerHTML = '<div>Usuário inexistente.<div>'
            }
        }
    }
}
function validarCadastro(){

    erros = []

    if(_nome == ''){
        erros.push('Insira um nome.')
    }
    if(isNaN(_idade)){
        erros.push('Insira uma idade.')
    }
    if(_email == ''){
        erros.push('Insira um email.')
    }
    if(_senha != '' && _senhaconf == ''){
        erros.push('Insira a confirmação de senha.')
    }
    if(_senha != _senhaconf && _senha != '' && _senhaconf != ''){
        erros.push('As senhas precisarm ser iguais.')
    }
    if(_senha.length < 7){
        erros.push('A senha deve ter 7 ou mais caracteres.')
    }
    for(i=0; i < pessoas.length; i++){
        if(_email == pessoas[i].email){
        erros.push("Este email já está sendo utilizado")
        }
    }
}
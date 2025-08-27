let jogos = [];
op = 0
carrinho = []
function carrinho_open(){
    if(carrinho == ""){
        document.getElementById('jogos').innerHTML = "Carrinho Vazio"
    }
    else{
        document.getElementById('jogos').innerHTML = `
        <div class="carrinho_produto" id="carrinho_produto">
            <div class="cima">
                <div>Produto</div>
                <div>Preço</div>
                <div>Quantidade</div>
            </div>
        </div>`
        for (let i = 0; i < carrinho.length; i++) {
            document.getElementById('carrinho_produto').innerHTML += `
                <div class="produto_carrinho">
                    <div class="foto_nome">
                        <img src="fotos/${carrinho[i]}.jpg" class="carrinho_imagem" alt="abadi">
                        <div class="carrinho_nome">${jogos[carrinho[i]].nome}</div>
                    </div>
                    <div class="preço">
                        ${jogos[carrinho[i]].preço}
                    </div>
                    <div class="botoes_carrinho">
                        <div class="botoes_quantidade">
                            <div class="botao_mod">-</div>
                            <div class="quantidade_carrinho">${jogos[carrinho[i]].quantidade}</div>
                            <div class="botao_mod">+</div>
                        </div>
                        <div class="lixeira">🗑️</div>
                    </div>
                </div>
                `
        }
        document.getElementById('carrinho_produto').innerHTML += `<div class="finalizar" onclick="comprar_carrinho()">Finalizar compra</div>`
        document.getElementById('jogos').innerHTML += `<div class="voltar" onclick="criarcards()">Voltar</div>`
    }
function comprar_carrinho(){
    const numero = '5551993562712';
    const mensagem = "oi";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
}
function add_carrinho(p){
    carrinho.push(p)
}
function select(x){
    produto_selecionado = x
    document.getElementById('jogos').innerHTML = `
        <div class="selected_produto">
            <div class="selected_left">
                <div class="selected_nome">${jogos[x].nome}</div>
                <img src="${jogos[x].imagem}" class="selected_image">
            </div>
            <div class="selected_right">
                <div class="descrição">${jogos[x].nome} - Este fone de ouvido sem fio combina conforto, qualidade de som e praticidade. Com design moderno e bateria de longa duração, é ideal para o dia a dia, seja no trabalho, na academia ou durante viagens.</div>
                <div class="price">${jogos[x].preço}</div>
                <div class="quanto">
                    <div class="quantidade">Quantidade</div>
                    <div class="numero">${jogos[x].quantidade}</div>
                </div>
                <div class="botoes">
                    <div class="home" id="carrinho" onclick="add_carrinho(${produto_selecionado})">🛒</div>
                    <div class="comprar" onclick="comprar()">Comprar</div>
                </div>
            </div> 
        </div>
        <div class="voltar" onclick="criarcards()">Voltar</div>
        `

}
function comprar(){
    const numero = '5551993562712';
    const mensagem = "oi";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
function categoria(x){
    op = x
    criarcards()
}

function prossiga(){
    criarcards()
}

async function carregarJogos() {
    try {
        const response = await fetch('jogos.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON');
        }
        jogos = await response.json();
        //criarcards()
    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
    }
}

function criarcard(x) {
    if(op == 0){
    document.getElementById("jogos").innerHTML += `
        <div id="jogo" onclick="select(${x})">
            <img src="${jogos[x].imagem}" class="default_imagem">
            <div class="nome">
                ${jogos[x].nome}
            </div>
</div>`
}
    else{
        if(jogos[x].categoria === op){
            document.getElementById("jogos").innerHTML +=   `
                <div id="jogo" onclick="select(${x})">
                    <img src="fotos/${x}.jpg" class="default_imagem">
                    <div class="nome">
                        ${jogos[x].nome}
                    </div>
        </div>`
        }
    }

}

function criarcards() {
    document.getElementById("jogos").innerHTML = "";
    for (let x = 0; x < jogos.length; x++) {
        jogos[x].imagem = `fotos/${x}.jpeg`
        criarcard(x);
    }
}

function pesquisa() {
    const barra = document.getElementById("search_bar").value.toLowerCase();
    document.getElementById("jogos").innerHTML = "";
    for (let x = 0; x < jogos.length; x++) {
        const nomeJogo = jogos[x].nome.toLowerCase();
        if(barra.length == 1 && nomeJogo[0] === barra[0]){
            criarcard(x);
        }
        else {
            if (nomeJogo.includes(barra) && barra.length != 1) {
                criarcard(x);
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("search_bar").addEventListener('input', () => {
        const search = document.getElementById("search_bar").value;
        if (search === '') {
            criarcards();
        } else {
            pesquisa();
        }
    });
});

function inicio(){
    document.body.innerHTML = `<div class="navbar">
        <label for="">De Tudo <br> Um Pouco</label>
        <div class="home" id="home" onclick="inicio()">⌂</div>
        <div class="home" onclick="carrinho_open()">🛒</div>
        <input type="text" id="search_bar" placeholder=" Pesquise clicando aqui">
        <div class="home">⚙️</div>
    </div>
    <div class="corpo">
        <div class="content" id="content">
            <div class="top" id="top">
                <label class="texto">Explore nosso catálogo <br> de produtos</label>
                <div class="botao">
                    <div class="c" onclick="categoria(0)">•Todos</div>
                    <div class="c" onclick="categoria(1)">•Cozinha</div>
                    <div class="c" onclick="categoria(2)">•Quarto</div>
                    <div class="c" onclick="categoria(3)">•Sala</div>
                    <div class="c" onclick="categoria(4)">•Decoração</div>
                    <div class="passar">→</div>
                </div>
            </div>
            <div class="produtos" id="jogos">
                <label id="apres">👋 Bem-vindo(a) à De tudo um pouco!</label>

                <label id="apres"for="">Aqui você encontra uma variedade de produtos, tudo em um só lugar. Confira algumas dicas para aproveitar melhor sua visita:</label>

                <label id="apres"for="">🛍️ Categorias organizadas: Navegue pelas categorias para encontrar o tipo de produto que procura. </label>

                <label id="apres"for="">🔎 Busca rápida: Use a barra de pesquisa no topo do site para encontrar algo específico. </label>

                <label id="apres"for="">🖱️ Clique no produto: Para ver mais detalhes ou comprar, é só clicar no produto desejado.  </label>

                <label id="apres"for="">📦 Novidades sempre chegando: Fique de olho nas atualizações da loja!</label>

                <label id="apres"for="">/Aproveite e boas compras! 💙</label>
                <div onclick="prossiga()" class="prossiga">Ir para as compras →</div>
            </div>
        </div>
    </div>`
}

window.onload = carregarJogos;

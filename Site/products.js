let jogos = [];
op = 0

function select(x){
    document.getElementById('jogos').innerHTML = `
        <div class="selected_produto">
            <div class="selected_left">
                <div class="selected_nome">${jogos[x].nome}</div>
                <img src="fotos/${x}.jpg" class="selected_image" alt="abadi">
            </div>
            <div class="selected_right">
                <div class="descrição">${jogos[x].nome} - Este fone de ouvido sem fio combina conforto, qualidade de som e praticidade. Com design moderno e bateria de longa duração, é ideal para o dia a dia, seja no trabalho, na academia ou durante viagens.</div>
                <div class="price">${jogos[x].preço}</div>
                <div class="quanto">
                    <div class="quantidade">Quantidade</div>
                    <div class="numero">${jogos[x].quantidade}</div>
                </div>
                <div class="botoes">
                    <div class="home" id="carrinho">🛒</div>
                    <div class="comprar">Comprar</div>
                </div>
            </div> 
        </div> 
            `
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
            <img src="fotos/${x}.jpg" alt="abadi">
            <div class="nome">
                ${jogos[x].nome}
            </div>
</div>`}
    else{
        if(jogos[x].categoria === op){
            document.getElementById("jogos").innerHTML +=   `
                <div id="jogo" onclick="select(${x})">
                    <img src="fotos/${x}.jpg" alt="abadi">
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

window.onload = carregarJogos;

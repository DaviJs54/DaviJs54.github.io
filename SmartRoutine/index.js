p_sn = ["Você estuda?","Alguma atividade físca?","Olha as redes sociais","Joga em computador ou videogame?","Costuma ler?"]
function start(){
    document.getElementById("meio").innerHTML = `
    <div id="q">${p_sn[pa]}</div>
        <div id="alt">
            <div class="op" onclick="conf()">Sim</div>
            <div class="op" onclick="conf()">Não</div>
        </div>`
}
function conf(){
    document.getElementById("q").innerHTML = p_sn[pa++]
}
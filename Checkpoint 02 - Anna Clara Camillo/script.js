let pontos = 0;

function adicionarPonto() {
    pontos++;

    document.getElementById("pontuacao").innerText = pontos;
}

function retirarPonto() {
    if (pontos > 0) {
        pontos--;
    }

    document.getElementById("pontuacao").innerText = pontos;
}   
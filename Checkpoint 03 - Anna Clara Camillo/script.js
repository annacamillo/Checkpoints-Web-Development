function trocarProduto() {
    let imagemAtual = document.getElementById("imagemProduto").getAttribute("src");

    if (imagemAtual === "imagens/produto1.jpg") {
        document.getElementById("imagemProduto").setAttribute("src", "imagens/produto2.jpg");
        document.getElementById("imagemProduto").setAttribute("alt", "Tênis Adidas Samba branco com detalhes prateados");
    } else {
        document.getElementById("imagemProduto").setAttribute("src", "imagens/produto1.jpg");
        document.getElementById("imagemProduto").setAttribute("alt", "Tênis Adidas Samba com estampa de vaquinha e detalhes rosa");
    }
}

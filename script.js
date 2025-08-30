let body = document.querySelector("body");
let produtoImagem = document.querySelector(".produto-imagem");
let btnCarrinho = document.querySelector(".botao-carrinho");

const mudarVisual = (cor, numImg) => {
    produtoImagem.classList.add("troca-img");

    body.style.backgroundColor = cor;
    btnCarrinho.style.backgroundColor = cor;

    setTimeout(() => {
        produtoImagem.src = `img/nike${numImg}.png`;
        produtoImagem.classList.remove("troca-img");
    }, 500);
}
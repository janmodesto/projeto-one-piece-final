
const botoes = document.querySelectorAll(".botao")

const personagem = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => { 
    botao.addEventListener("click", () => {
       
        desselecionarBotao();


        const personagemSelecionado = desselecionarPersonagem(botao);
        personagemSelecionado.classList.remove("selecionado");
personagem[indice].classList.add("selecionado")
    }); 
});

function desselecionarPersonagem(botao) {
    botao.classList.add("selecionado");
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    return personagemSelecionado;
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

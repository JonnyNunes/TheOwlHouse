// Lembra-se que o primeiro passo antes de programar é definir os passos a passos
const itensListados = document.querySelectorAll(".personagem")
itensListados.forEach(personagem => {
    // Usa o forEach para usar o  evento
    personagem.addEventListener("mouseover", () => {
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: "smooth"})
        }
        removerClasseSelecionadoPersonagem()
        personagem.classList.add("selecionado") 
        alterarImagemPersonagemSelecionado(personagem)
        alterarNomePersonagemSelecionado(personagem)
        alterarDescricaoPersonagemSelecionado(personagem)
    })
})

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagemSelecionado = document.getElementById("descricao-personagem")
    descricaoPersonagemSelecionado.innerText = personagem.getAttribute("data-description")
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById("nome-personagem")
    nomePersonagem.innerText = personagem.getAttribute("data-name")
}

function alterarImagemPersonagemSelecionado(personagem) {
    const personagemSelecionadoGrande = document.querySelector(".personagem-caracteristica")
    const idPersonagem = personagem.attributes.id.value
    personagemSelecionadoGrande.src = `./src/img/${idPersonagem}.jpg`
}

function removerClasseSelecionadoPersonagem() {
    const personagemSelecionado = document.querySelector(".selecionado")
    personagemSelecionado.classList.remove("selecionado")
}

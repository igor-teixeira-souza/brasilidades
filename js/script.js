// Dados dos ídolos
const idolosData = {
    pele: {
        nome: "Pelé",
        imagem: "pele.jpg",
        descricao: "Edson Arantes do Nascimento, conhecido como Pelé, é considerado por muitos o maior jogador de futebol de todos os tempos. Com uma carreira extraordinária que começou aos 15 anos, ele conquistou três Copas do Mundo com a Seleção Brasileira (1958, 1962 e 1970). Marcou 1.279 gols em 1.363 jogos, um recorde ainda não superado. Pelé revolucionou o futebol com sua técnica excepcional, visão de jogo e capacidade de fazer gols impressionantes."
    },
    marta: {
        nome: "Marta",
        imagem: "marta.jpg",
        descricao: "Marta Vieira da Silva é considerada a maior jogadora de futebol feminino de todos os tempos. Eleita 6 vezes a melhor jogadora do mundo pela FIFA, ela é a maior artilheira da história das Copas do Mundo (masculina e feminina). Conhecida como 'Pelé de Saias', Marta inspirou gerações de meninas a seguirem seus sonhos no futebol. Sua história de superação, vindo de uma família humilde em Alagoas até se tornar um ícone mundial, é um exemplo de determinação e talento."
    }
};

// Elementos do DOM
const modal = document.getElementById("idoloModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const closeButton = document.querySelector(".close-button");
const idoloCards = document.querySelectorAll(".idolo-card");

// Adiciona evento de clique em cada card de ídolo
idoloCards.forEach(card => {
    card.addEventListener("click", () => {
        const idolo = card.dataset.idolo;
        const dados = idolosData[idolo];
        
        modalTitle.textContent = dados.nome;
        modalImage.src = dados.imagem;
        modalImage.alt = `Foto de ${dados.nome}`;
        modalDescription.textContent = dados.descricao;
        
        modal.style.display = "block";
    });
});

// Fecha o modal quando clicar no X
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal quando clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Fecha o modal com a tecla ESC
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});

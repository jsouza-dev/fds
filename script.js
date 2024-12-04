// Exibir mensagem de boas-vindas
document.getElementById("welcome-message").innerText = "Bem-vindo ao meu perfil de aluno!";

// Função para redirecionar à rede social
function irParaRedeSocial() {
  window.location.href = "https://br.linkedin.com/in/jo%C3%A3o-souza-a17676338?original_referer=https%3A%2F%2Fwww.google.com%2F";
}

// Efeitos flutuantes no fundo
function criarEfeitoFlutuante() {
  const efeito = document.createElement("div");
  efeito.classList.add("floating-effect");

  // Tamanho e posição aleatórios
  efeito.style.left = Math.random() * 100 + "vw";
  efeito.style.animationDuration = Math.random() * 10 + 5 + "s";
  document.body.appendChild(efeito);

  // Remover após a animação
  efeito.addEventListener("animationend", () => {
    efeito.remove();
  });
}

// Criar múltiplos efeitos flutuantes
setInterval(criarEfeitoFlutuante, 1000);

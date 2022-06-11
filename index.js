const resposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]

function fazerPergunta() {

  if(inputPergunta.value == ""){
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta ="<div>" + inputPergunta.value + "</div>"

  const totalResp = respostas.length
const numeroAle = Math.floor(Math.random() * totalResp)


resposta.innerHTML = pergunta + respostas[numeroAle]
resposta.style.opacity = 1

  setTimeout(function(){
    resposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)

}









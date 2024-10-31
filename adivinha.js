// Todas as variáveis declaradas aqui em cima - fora das funções - são consideradas GLOBAIS e funcionam dentro de qualquer outra função!

let res = document.querySelector('section#result')
let computador = 0
let jogador = 0
let tentativa = 0

function calcular() {
    let min = 1 // As variáveis declaradas aqui dentro são LOCAIS, e só funcionam dentro da função onde foram declaradas
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
	tentativa=tentativa+1;

    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
	tentativa=tentativa+1;

    } else if (jogador == computador) {
	tentativa=tentativa+1;
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou com ${tentativa} tentativas! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}
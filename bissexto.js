function teste() {
	let ano = Number(window.prompt('Digite um ano:'));
	let tipo;
	let proxano;
	let modulo;
		modulo = 0, 1, 2, 3, 4
	if ((ano % 4 == 0 && ano%100!==0) || (ano%400===0)) {
	    tipo = '<strong>É BISSEXTO</strong>'
	}  else {
	    tipo = '<strong>NÃO É BISSEXTO</strong>'
	}


	let res = document.querySelector('section#result')
	res.innerHTML = `<p>O ano ${ano} que foi digitado ${tipo}! O próximo ano bissexto será ${proxano}.</p>`
}
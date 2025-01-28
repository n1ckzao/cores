"use strict"

const botaoTrocaCor = document.getElementById('troca-cor')

function trocaCor () {
    const cor = document.getElementById('cor').value
    document.documentElement.style.setProperty('--cor-fundo', cor)
}

botaoTrocaCor.addEventListener('click', trocaCor)


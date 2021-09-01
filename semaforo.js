"use strict"

let idVermelho
let idAmarelo
let idVerde
let idLooping

const getId = (elemento) => document.getElementById(elemento)

const vermelho = () => {
    const semaforo = document.getElementById('semaforo')
    semaforo.src = "img/vermelho.png"
}

const amarelo = () => {
    const semaforo = document.getElementById('semaforo')
    semaforo.src = "img/amarelo.png"
}

const verde = () => {
    const semaforo = document.getElementById('semaforo')
    semaforo.src = "img/verde.png"
}

const automatico = () => {
    const botaoAutomatico = document.getElementById('automatico')
    if (botaoAutomatico.textContent == 'Automático') {
        alternarCores()
        idLooping = setInterval(alternarCores, 3000)
        botaoAutomatico.textContent = "Parar"
    } else {
        parar()
        botaoAutomatico.textContent = 'Automático'
    }
    
}

const alternarCores = () => {
    idVermelho = setTimeout(vermelho, 500)
    idAmarelo = setTimeout(amarelo, 1500)
    idVerde = setTimeout(verde, 2500)
}

const parar = () => {
    clearInterval(idVermelho)
    clearInterval(idAmarelo)
    clearInterval(idVerde)
    clearInterval(idLooping)
}

//eventos
getId('vermelho').addEventListener('click', vermelho)
getId('amarelo').addEventListener('click', amarelo)
getId('verde').addEventListener('click', verde)
getId('automatico').addEventListener('click', automatico)

var monstroselecionado;
var armaselecionada;

function iniciar() {
    var objClicavel = document.getElementsByClassName('clicavel')
    for (var i = 0; i < objClicavel.length; i++) {
        objClicavel[i].addEventListener('click', marcaBorda)
    }

    var clicouBotao = document.getElementById('botao_clicavel')
    clicouBotao.addEventListener('click', pegaBatalha)
}

var vidaMonstro = 0
var danoArma = 0

function marcaBorda(evento) {
    var clicado = evento.target.parentElement;
    var pegaid = clicado.getAttribute('id');
    if (pegaid == 'orc') {
        clicado.classList.add('selecionado')
        document.getElementById('goblin').classList.remove('selecionado')
        document.getElementById('feiticeira').classList.remove('selecionado')
        vidaMonstro = 12
    } else if (pegaid == 'goblin') {
        clicado.classList.add('selecionado')
        document.getElementById('orc').classList.remove('selecionado')
        document.getElementById('feiticeira').classList.remove('selecionado')
        vidaMonstro = 8
    } else if (pegaid == 'feiticeira') {
        clicado.classList.add('selecionado')
        document.getElementById('goblin').classList.remove('selecionado')
        document.getElementById('orc').classList.remove('selecionado')
        vidaMonstro = 18
    }

    if (pegaid == 'soco') {
        clicado.classList.add('selecionado')
        document.getElementById('arco').classList.remove('selecionado')
        document.getElementById('espada').classList.remove('selecionado')
        danoArma = 2
    } else if (pegaid == 'arco') {
        clicado.classList.add('selecionado')
        document.getElementById('soco').classList.remove('selecionado')
        document.getElementById('espada').classList.remove('selecionado')
        danoArma = 5
    } else if (pegaid == 'espada') {
        clicado.classList.add('selecionado')
        document.getElementById('soco').classList.remove('selecionado')
        document.getElementById('arco').classList.remove('selecionado')
        danoArma = 10
    }
    console.log(pegaid)  
}

var vida_monstros = {
    orc : 12,
    goblin : 8,
    feiticeira : 18
  };

var dano_armas = {
    soco : 2,
    arco : 5,
    espada : 10

}

function pegaBatalha(evento) {
    document.getElementsByClassName('selecionado')
    var a1 = document.getElementsByClassName('selecionado','armas')
    console.log(vidaMonstro)
    console.log(danoArma)
    var vidaprovisoria = vidaMonstro
    if (danoArma == 0 || vidaMonstro == 0) {
        alert('falta selecionar arma ou monstro')
    } else {
        vidaprovisoria = vidaMonstro - danoArma
        if (vidaprovisoria > 0) {
            alert('monstro vivo')
            vidaprovisoria = vidaMonstro
        } else {
            alert('monstro morto')
            vidaprovisoria = vidaMonstro
        }
    }
    console.log(vidaMonstro)
}
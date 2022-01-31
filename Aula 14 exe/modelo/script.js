function carregar() {
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "../modelo/imagens/manha.png"
        document.body.style.background = "#f6c292"
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = '../modelo/imagens/tarde.png'
        document.body.style.background = '#81625f'
    } else {
        //BOA NOITE
        img.src = '../modelo/imagens/noite.png'
        document.body.style.background = '#045e66'
    }
}

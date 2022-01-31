function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homemJovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else if (idade > 50) {
                //idoso
                img.setAttribute('src', 'senhor.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulherJovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else if (idade > 50) {
                //idoso
                img.setAttribute('src', 'senhora.jpg')
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}


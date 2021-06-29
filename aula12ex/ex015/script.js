function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > anoAtual) {
        alert("Verifique os dados")
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = anoAtual - Number(fano.value)
        let genero = ''
        let img = document.createElement('img') //Criando tag img

        img.setAttribute('id', 'foto') // Dando id=foto para img

        if (fsex[0].checked) { // Se o que tiver marcado for o fsex 0 == masculino
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebehomem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebemulher.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // Adicionar em baixo
    }


}
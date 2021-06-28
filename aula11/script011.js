function verificar() {
    let pais = document.querySelector('input#txtpais')
    let resultado = document.querySelector('div#resultado')
    let paisVerificado = pais.value

    resultado.innerHTML = `Seu país é ${paisVerificado}`

    if (paisVerificado == 'Brasil') {
        resultado.innerHTML += (`<p>Você é <strong>Brasileiro</strong></p>`)
    } else {
        resultado.innerHTML += (`<p>Você é <strong>Estrangeiro</strong></p>`)


    }

}
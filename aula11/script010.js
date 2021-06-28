function calcular() {
    let txtv = document.querySelector('input#txtvel')
    let resultado = document.querySelector('div#resultado')
    let vel = Number(txtv.value)

    resultado.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> Km/h </p>`
    if (vel > 60) {
        resultado.innerHTML += `<p>Você está <strong>Multado</strong> </p>`
    }


    resultado.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`

}
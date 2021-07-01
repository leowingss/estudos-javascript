function calcular() {
    let nome = document.getElementById('nome')
    let resultado = document.getElementById('resultado')
    let nota1 = document.getElementById('nota1')
    let nota2 = document.getElementById('nota2')
    let nota3 = document.getElementById('nota3')
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)
    let media = (n1 + n2 + n3) / 3
    let mediaArredondada = Math.round(media)

    resultado.innerHTML = `Olá ${nome.value} suas notas foram: <strong>${n1}, ${n2} e ${n3}</strong> `
    resultado.innerHTML += `Sua média aritmética é de <strong> ${mediaArredondada} </strong>. <br>`

    if (mediaArredondada < 7) {
        resultado.innerHTML += ` Reprovado \u{2639}`
    } else {
        resultado.innerHTML += ` Aprovado \u{1F604}`
    }


}
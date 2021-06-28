function somar() {
    let tn1 = document.querySelector('input#txtn1')
    let tn2 = document.querySelector('input#txtn2')
    let resultado = document.getElementById('resultado')
    let n1 = Number(tn1.value) // Valor que está dentro da caixa tn1.
    let n2 = Number(tn2.value)
    let soma = n1 + n2

    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>`
}
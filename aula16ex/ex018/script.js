let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ' ' // Quando adicionar um elemento, limpa o resultado
    } else {
        alert("Valor inválido ou já encontrado na lista")
    }

    num.value = ' '
    num.focus() // Clicar para o cursor piscar.

}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0


        for (let pos in valores) {
            soma += valores[pos] // Começa de 0 e vai somando os valores...
            if (valores[pos] > maior)
                maior = valores[pos] // Deixa de ser o anterior e passa a ser esse.
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = (soma / total).toFixed(2)



        resultado.innerHTML = ' '
        resultado.innerHTML += `<p>Ao todos, temos ${total} números cadastrados </p> `
        resultado.innerHTML += `<p>O maior valor é ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor é ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos: ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores é: ${media}.</p>`

    }
}
function tabuada() {
    let numero = document.getElementById('txtnum')
    let tabuada = document.getElementById('seltab')

    if (numero.value.length == 0) {
        alert("Por favor, digite um número")
    } else {
        let n = Number(numero.value)

        tabuada.innerHTML = ' '
        for (let contador = 0; contador <= 10; contador++) {
            let item = document.createElement('option') // Criando tag option dinamicamente
            item.text = `${n} x ${contador} = ${n * contador} ` // Parte de dentro do option
            item.value = `tabuada${contador}`
            tabuada.appendChild(item) // Adicionar um elemento filho, que é o item
        }
    }
}
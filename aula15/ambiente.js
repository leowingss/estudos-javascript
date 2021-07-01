let num = [5, 6, 4, 3, 1, 2]
    // num.sort()


//buscando valores com indexOf()

let pos = num.indexOf(42)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
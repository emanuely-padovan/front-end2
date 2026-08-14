// Live Code (Aula 1 - Kickoff) - 07/08/2026

class Prato {
    constructor (nome, preco, categoria) {
    // Apontamento de variáveis ("armazenamento")
        this.nome = nome,
        this.preco = preco,
        this.categoria = categoria
    }
    formatarPreco() {
        return `R$ ${this.preco.toFixed(2).replace('.', ',')}`
    }
    aplicarDesconto(percentual) {
        this.preco = this.preco * (1 - percentual/100)
    }
}

class Bebida {
    constructor (nome, preco, volume) {
        this.nome = nome,
        this.preco = preco,
        this.volume = volume
    }
    formatarDescricao() {
        return `${this.nome} - ${this.volume}ml - R$ ${this.preco}`
    }
}

const cardapio = [
    new Prato("Feijoada", 42.90, "Prato principal"),
    new Prato("Moqueca", 58.00, "Prato principal"),
    new Prato("Coxinha artesanal", 8.50, "Petisco"),
    new Prato("Brigadeiro Gourmet", 6.00, "Sobremesa"),
    new Prato("Morango do Amor", 15.00, "Sobremesa")
]

const bebida = [
    new Bebida("Suco de Maracujá", 12.00, 250),
    new Bebida("Suco de Laranja", 12.00, 200),
    new Bebida("Sprite", 8.50, 500)
]

console.log(" ==== Pratos Criados ==== ")
cardapio.forEach(p => {
    console.log(`${p.nome} -> ${p.formatarPreco()}`)
})

console.log(" ==== Bebidas Criadas ==== ")
bebida.forEach(b => {
    console.log(`${b.formatarDescricao()}`)
})


// Alterações
const containerCardapio = document.querySelector('#cardapio')
function criarCardCardapio(prato) {
    const card = document.createElement('div')
    card.className = 'card-prato col-12 col-md-6 col-lg-4 p-4 bg-white rounded-3 shadow-sm'
    
    card.innerHTML = 
    `
        <h3 class='fs-4 fw-bold text-dark mb-2'>${prato.nome}</h3>
        <span class='categoria fs-6 d-block mb-3'>${prato.categoria}</span>
        <div class='preco fs-5 fw-bold text-success'>${prato.formatarPreco()}</div>
    `

    card.addEventListener('click', () => {
        alert(
            `
            🍽️ ${prato.nome} \n
            Categoria: ${prato.categoria} \n
            Preço: ${prato.formatarPreco()}
            `
        )
    })
    return card
}

function renderizarCardapio() {
    containerCardapio.innerHTML = ''
    cardapio.forEach(prato => {
        const card = criarCardCardapio(prato)
        containerCardapio.appendChild(card)
    })
}

renderizarCardapio()
cardapio[0].aplicarDesconto(72.8)
renderizarCardapio()
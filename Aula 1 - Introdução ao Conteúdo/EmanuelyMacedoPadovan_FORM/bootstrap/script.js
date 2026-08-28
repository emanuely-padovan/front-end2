class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }
    formatarPreco() {
        return `R$ ${this.preco.toFixed(2).replace('.', ',')}`
    }
}

const produtos = [
    new Produto("Feijoada", 42.90, "Prato principal"),
    new Produto("Coxinha", 8.50, "Petisco"),
    new Produto("Brigadeiro", 4.50, "Sobremesa")
]

// Informações no "Console"
console.log("Produtos Criados - Cardápio")
produtos.forEach(p => {
    console.log(`${p.formatarPreco()}`)
})

const containerProdutos = document.querySelector("#produtos")
function criarCardProduto(produto) {
    const card = document.createElement('div')
    card.className = 'card-produto col-12 col-md-6 col-lg-4 bg-white p-4 rounded-3 shadow-sm'

    card.innerHTML = 
    `
        <h3 class='fs-4 fw-bold text-dark mb-2'>${produto.nome}</h3>
        <div class='preco fs-5 fw-bold text-primary'>${produto.formatarPreco()}</div>
        <span class='categoria fs-6 d-block mb-3'>${produto.categoria}</span>
    `
    return card
}

function renderizar() {
    containerProdutos.innerHTML = ''
    produtos.forEach(produto => {
        const card = criarCardProduto(produto)
        containerProdutos.appendChild(card)
    })
}

renderizar()
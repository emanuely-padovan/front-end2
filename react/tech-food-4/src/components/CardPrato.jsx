import {useState} from "react";

function CardPrato({nome, preco, categoria}) {
    const [quantidade, setQuantidade] = useState(1);

    const precoFormatado = preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    function diminuir() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    function aumentar() {
        setQuantidade(quantidade + 1);
    };

    function adicionarAoCarrinho() {
        console.log(`Adicionou ${nome} ao carrinho!`)
    };

    return (
        <article className="card-prato">
            <span className="categoria">{categoria}</span>
            <h2>{nome}</h2>
            <p className="preco">{precoFormatado}</p>
            <div className="quantidade">
                <button className="btn diminuir" onClick={diminuir}>-</button>
                <span className="numero">{quantidade}</span>
                <button className="btn aumentar" onClick={aumentar}>+</button>
            </div>
            <button type='button' className="btn-adicionar" onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
        </article>
    );
}

export default CardPrato;

function CardPrato({nome, preco, descricao, categoria}) {
    const precoFormatado = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return (
        <article className="card-prato">
            <span className="categoria">{categoria}</span>
            <h2>{nome}</h2>
            <p className="descricao">{descricao}</p>
            <p className="preco">{precoFormatado}</p>
        </article>
    );
}

export default CardPrato;
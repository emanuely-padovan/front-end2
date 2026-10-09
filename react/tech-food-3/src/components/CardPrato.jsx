function CardPrato({nome, preco, descricao, categoria}) {
    const precoFormatado = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    const categoriaFormatada = categoria === "Sobremesa" ? `🍰${categoria}` : categoria;

    return (
        <article className="card-prato">
            <h2>{nome}</h2>
            <p className="descricao">{descricao}</p>
            <span className="categoria">{categoriaFormatada}</span>
            <p className="preco">{precoFormatado}</p>
        </article>
    );
}

export default CardPrato;

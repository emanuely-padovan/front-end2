function Header({ totalItens, totalValor, onLimpar }) {
    const totalFormatado = totalValor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return (
        <header className="header">
            <h1>TechFood - Sabor & Saber</h1>
            <p>Formativa | Emanuely Macedo Padovan - O sabor que ensina...</p>
            <p className="carrinho">
                Itens no carrinho: {totalItens} | Total: {totalFormatado}
            </p>
            <div>
                <button
                    type="button"
                    className="btn-secundario"
                    onClick={onLimpar}
                    disabled={totalItens === 0}
                >
                    Limpar pedido
                </button>
            </div>
        </header>
    );
}

export default Header;
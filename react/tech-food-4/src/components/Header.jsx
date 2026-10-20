function Header({totalItens}) {
    return (
        <header className="header">
            <h1>TechFood - Sabor & Saber</h1>
            <p>Formativa | Emanuely Macedo Padovan - O sabor que ensina... </p>
            <p className="carrinho">Total de itens no carrinho: {totalItens}</p>
        </header>
    );
}

export default Header;
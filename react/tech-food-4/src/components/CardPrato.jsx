import { useState } from "react";

const limite = 10;
function CardPrato({ id, nome, preco, categoria, descricao, onAdicionar }) {
    const [quantidade, setQuantidade] = useState(1);
    const [curtidas, setCurtidas] = useState(0);
    const [mostrarDescricao, setMostrarDescricao] = useState(false);

    const precoFormatado = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    function diminuir() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    }

    function aumentar() {
        if (quantidade < limite) {
            setQuantidade(quantidade + 1);
        }
    }

    function adicionarAoCarrinho() {
        onAdicionar(id, quantidade);
    }
    return (
        <article className="card-prato">
            <span className="categoria">{categoria}</span>
            <h2>{nome}</h2>
            <p className="preco">{precoFormatado}</p>

            {mostrarDescricao && <p className="descricao">{descricao}</p>}
            <button type="button" className="btn-secundario" onClick={() => setMostrarDescricao(!mostrarDescricao)}> {mostrarDescricao ? "Esconder descrição" : "Mostrar descrição"}</button>

            <button type="button" className="btn-curtir" onClick={() => setCurtidas(curtidas + 1)}>❤️ Curtir ({curtidas})</button>

            <div className="quantidade">
                <button type="button" onClick={diminuir} disabled={quantidade === 1}>-</button>
                <span>{quantidade}</span>
                <button type="button" onClick={aumentar} disabled={quantidade === limite}>+</button>
                {quantidade === limite && <small className="limite">máx. {limite}</small>}
            </div>

            <button type="button" className="btn-adicionar" onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
        </article>
    );
}

export default CardPrato;

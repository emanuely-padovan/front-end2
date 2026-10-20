import { useState } from "react";
import CardPrato from "./components/CardPrato";
import Header from "./components/Header";
import Rodape from "./components/Rodape";
import { cardapio } from "./data/cardapio";
import "./App.css";

function App() {
  // pedido guarda { idDoPrato: quantidade }
  const [pedido, setPedido] = useState({});

  function adicionarAoPedido(id, quantidade) {
    setPedido((atual) => ({ ...atual, [id]: (atual[id] || 0) + quantidade }));
  }

  function limparPedido() {
    setPedido({});
  }

  // valores derivados: não precisam de useState próprio
  const totalItens = Object.values(pedido).reduce((soma, q) => soma + q, 0);
  const totalValor = cardapio.reduce(
    (soma, prato) => soma + prato.preco * (pedido[prato.id] || 0),
    0
  );

  return (
    <main className="app">
      <Header totalItens={totalItens} totalValor={totalValor} onLimpar={limparPedido} />
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            id={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            descricao={prato.descricao}
            onAdicionar={adicionarAoPedido}
          />
        ))}
      </section>
      <Rodape />
    </main>
  );
}

export default App;
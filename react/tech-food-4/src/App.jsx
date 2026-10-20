import {useState} from "react";
import CardPrato from "./components/CardPrato";
import Header from "./components/Header";
import {cardapio} from "./data/cardapio";
import "./App.css";

function App() {
  const [totalItens, setTotalItens] = useState(0);
  function adicionarAoPedido(quantidade) {
    setTotalItens(totalItens + quantidade);
  }; 

  return (
    <main className="app">
      <Header/>
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            onAdicionar={adicionarAoPedido}
          />
        ))}
      </section>
    </main>
  );
}

export default App;

import "./App.css";
import {cardapio} from "./data/cardapio"
import CardPrato from "./components/CardPrato";
import Header from "./components/Header";
import Footer from "./components/Rodape";

function App() {
  return (
    <main className="app">
      <Header/>
      <h2>Cardápio com {cardapio.length} itens</h2>
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato key={prato.id} nome={prato.nome} preco={prato.preco} descricao={prato.descricao} categoria={prato.categoria}
          // key (indicação de item único)
          />
        ))}
      </section>
      <Footer/>
    </main>
  );
}

export default App;

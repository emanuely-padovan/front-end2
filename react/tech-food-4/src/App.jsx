import CardPrato from "./components/CardPrato";
import Header from "./components/Header";
import Footer from "./components/Rodape";

const cardapio = [
  {id: 1, nome: "Feijoada", preco: 42.90, descricao: "Feijoada completa", categoria: "Prato principal"},
  {id: 2, nome: "Moqueca", preco: 49.90, descricao: "Moqueca de Carne Moída", categoria: "Prato principal"},
  {id: 3, nome: "Pudim", preco: 15.00, descricao: "Pudim de Leite", categoria: "Sobremesa"},
  {id: 4, nome: "Brownie", preco: 10.00, descricao: "Brownie de Chocolate", categoria: "Sobremesa"},
  {id: 5, nome: "Suco de Laranja", preco: 12.00, descricao: "Suco saboroso", categoria: "Bebida"},
]

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

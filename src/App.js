import React, { useState } from "react";
import Produtos from "./components/Produtos";
import BarraPesquisa from "./components/BarraPesquisa";
import Carrinho from "./components/carrinho";
import icon from "./assents/iincone.png";
import queijo1 from "./assents/queijo1.webp";
import queijo2 from "./assents/queijo2.webp";
import queijo3 from "./assents/queijo3.webp";
import queijo4 from "./assents/queijo4.webp";
import queijo5 from "./assents/queijo5.webp";
import queijo6 from "./assents/queijo6.webp";
import queijo7 from "./assents/queijo7.webp";
import queijo8 from "./assents/queijo8.webp";
import queijo9 from "./assents/queijo9.webp";
import queijo10 from "./assents/queijo10.webp";
import queijo11 from "./assents/queijo11.webp";
import queijo12 from "./assents/queijo12.jpg";
import queijo13 from "./assents/queijo13.jpeg";
import queijo14 from "./assents/queijo14.jpg";

const produtos = [
  { id: 1, nome: "MUSSARELA", preco: 80.99, imgUrl: queijo1, avaliacao: 4.8 },
  {
    id: 2,
    nome: "QUEIJO MINAS",
    preco: 60.99,
    imgUrl: queijo2,
    avaliacao: 4.5,
  },
  {
    id: 3,
    nome: "QUEIJO PRATO",
    preco: 170.99,
    imgUrl: queijo3,
    avaliacao: 4.9,
  },
  {
    id: 4,
    nome: "QUEIJO COALHO",
    preco: 100.99,
    imgUrl: queijo4,
    avaliacao: 4.9,
  },
  { id: 5, nome: "PARMESAO", preco: 150.99, imgUrl: queijo5, avaliacao: 4.9 },
  {
    id: 6,
    nome: "QUEIJO GOUDA",
    preco: 200.99,
    imgUrl: queijo6,
    avaliacao: 4.9,
  },
  {
    id: 7,
    nome: "QUEIJO PROVOLONE",
    preco: 250.99,
    imgUrl: queijo7,
    avaliacao: 4.9,
  },
  { id: 8, nome: "REQUEIJAO", preco: 80.99, imgUrl: queijo8, avaliacao: 4.9 },
  {
    id: 9,
    nome: "QUEIJO CHEDDAR",
    preco: 100.99,
    imgUrl: queijo9,
    avaliacao: 4.9,
  },
  {
    id: 10,
    nome: "QUEIJO GORGONZOLA",
    preco: 180.99,
    imgUrl: queijo10,
    avaliacao: 4.9,
  },
  {
    id: 11,
    nome: "QUEIJO BRIE",
    preco: 300.99,
    imgUrl: queijo11,
    avaliacao: 4.9,
  },
  {
    id: 12,
    nome: "QUEIJO BURRATA",
    preco: 150.99,
    imgUrl: queijo12,
    avaliacao: 4.9,
  },
  {
    id: 13,
    nome: "QUEIJO COLONIAL",
    preco: 200.99,
    imgUrl: queijo13,
    avaliacao: 4.9,
  },
  {
    id: 14,
    nome: "QUEIJO EDAM",
    preco: 100.99,
    imgUrl: queijo14,
    avaliacao: 4.9,
  },
];

function App() {
  const [busca, setBusca] = useState("");
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const adicionarAoCarrinho = (produto) => {
    setItensCarrinho([...itensCarrinho, produto]);
  };

  const removerItem = (index) => {
    const novoCarrinho = [...itensCarrinho];
    novoCarrinho.splice(index, 1);
    setItensCarrinho(novoCarrinho);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>
        <img
          src={icon}
          alt="ícone"
          style={{
            width: "120px",
            height: "150px",
            verticalAlign: "middle",
            marginRight: "8px",
          }}
        />
        QUEIJARIA DO DURVALDO
      </h1>

      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "10px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setMostrarCarrinho(!mostrarCarrinho)}
          style={{
            padding: "10px 15px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {mostrarCarrinho ? "Fechar Carrinho" : "Abrir Carrinho"}
        </button>

        <BarraPesquisa
          valor={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <Produtos
        produtos={produtosFiltrados}
        adicionarAoCarrinho={adicionarAoCarrinho}
      />

      {mostrarCarrinho && (
        <Carrinho
          itens={itensCarrinho}
          removerItem={removerItem}
          onFechar={() => setMostrarCarrinho(false)}
        />
      )}
    </div>
  );
}

export default App;

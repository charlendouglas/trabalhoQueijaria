// src/components/Produtos.jsx
import React from "react";

const Produtos = ({ produtos, adicionarAoCarrinho }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {produtos.map((produto) => (
        <div
          key={produto.id}
          style={{ border: "1px solid #ddd", padding: "10px", width: "200px" }}
        >
          <img
            src={produto.imgUrl}
            alt={produto.nome}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
          <h3>{produto.nome}</h3>
          <p>R$ {produto.preco.toFixed(2)}</p>
          <button onClick={() => adicionarAoCarrinho(produto)}>
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

export default Produtos;

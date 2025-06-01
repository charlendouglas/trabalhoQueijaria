import React from "react";
import BarraPesquisa from "./BarraPesquisa";

function Carrinho({ itens, removerItem, onFechar }) {
  const total = itens.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div
      style={{
        position: "fixed",
        top: "120px",
        right: "20px",
        width: "300px",
        maxHeight: "60vh",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        zIndex: 999,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h2 style={{ margin: 0 }}>Carrinho</h2>
        <button
          onClick={onFechar}
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
          title="Fechar Carrinho"
        >
          ✖
        </button>
      </div>

      <BarraPesquisa
        valor={""}
        onChange={(e) =>
          console.log("Buscar dentro do carrinho:", e.target.value)
        }
      />

      {itens.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul style={{ padding: 0, listStyle: "none" }}>
            {itens.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <strong>{item.nome}</strong>
                <br />
                R$ {item.preco.toFixed(2)}
                <br />
                <button
                  onClick={() => removerItem(index)}
                  style={{
                    marginTop: "5px",
                    padding: "4px 8px",
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <div
            style={{
              marginTop: "15px",
              fontWeight: "bold",
              fontSize: "16px",
              borderTop: "1px solid #ccc",
              paddingTop: "10px",
            }}
          >
            Total: R$ {total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}

export default Carrinho;

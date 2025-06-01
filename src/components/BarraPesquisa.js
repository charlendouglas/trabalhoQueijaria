// src/components/BarraPesquisa.jsx
import React from "react";

const BarraPesquisa = ({ valor, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar queijos..."
      value={valor}
      onChange={onChange}
      style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
    />
  );
};

export default BarraPesquisa;

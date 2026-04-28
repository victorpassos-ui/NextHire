import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [busca, setBusca] = useState("");

  return (
    <div className="search">
      <input
        placeholder="Buscar vaga..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <button onClick={() => onSearch(busca)}>Buscar</button>
    </div>
  );
}
import { useState } from "react";

export default function SearchBar({ onSearch }) {

  const [busca, setBusca] = useState("");

  function handleSearch() {
    onSearch(busca);
  }

  return (
    <div className="search">

      <input
        type="text"
        placeholder="Buscar vaga, empresa ou descrição..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <button onClick={handleSearch}>
        Buscar
      </button>

    </div>
  );
}
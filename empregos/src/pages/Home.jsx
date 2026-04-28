import { useState } from "react";
import { jobs } from "../data/jobs";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [lista, setLista] = useState(jobs);

  function buscar(termo) {
    const filtradas = jobs.filter(j =>
      j.titulo.toLowerCase().includes(termo.toLowerCase())
    );
    setLista(filtradas);
  }

  return (
    <div className="container">
      <h1>💼 Vagas Locais</h1>
      <p className="sub">Encontre oportunidades perto de você</p>

      <SearchBar onSearch={buscar} />

      <p className="sub">{lista.length} vagas encontradas</p>

      {lista.length === 0 && <p>Nenhuma vaga encontrada</p>}

      {lista.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
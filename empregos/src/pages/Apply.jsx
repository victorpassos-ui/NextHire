import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";
import { useState } from "react";

export default function Apply() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === Number(id));

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function enviar(e) {
    e.preventDefault();
    alert(`Candidatura enviada para ${job.titulo}!`);
  }

  if (!job) {
    return <p className="container">Vaga não encontrada</p>;
  }

  return (
    <div className="container">
      <h1>Candidatar-se</h1>
      <p className="sub">{job.titulo} • {job.empresa}</p>

      <form onSubmit={enviar} className="job-card">
        <input
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Enviar candidatura</button>
      </form>

      <Link to="/">
        <button style={{ marginTop: "20px" }}>Voltar</button>
      </Link>
    </div>
  );
}
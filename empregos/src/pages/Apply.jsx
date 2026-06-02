import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";
import { useState } from "react";

export default function Apply() {
  const { id } = useParams();

  const job = jobs.find(j => j.id === Number(id));

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    idade: "",
    experiencia: "",
    curriculo: ""
  });

  if (!job) {
    return <p className="container">Vaga não encontrada</p>;
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function enviar(e) {
    e.preventDefault();

    alert(`
Candidatura enviada com sucesso!

Nome: ${form.nome}
Vaga: ${job.titulo}
Empresa: ${job.empresa}
    `);
  }

  return (
    <div className="container">
      <h1>Candidatar-se</h1>

      <p className="sub">
        {job.titulo} • {job.empresa}
      </p>

      <form onSubmit={enviar} className="job-card">

        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="idade"
          placeholder="Idade"
          value={form.idade}
          onChange={handleChange}
          required
        />

        <textarea
          name="experiencia"
          placeholder="Fale sobre sua experiência"
          value={form.experiencia}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <textarea
          name="curriculo"
          placeholder="Resumo do currículo"
          value={form.curriculo}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button type="submit">
          Enviar candidatura
        </button>

      </form>

      <Link to="/">
        <button style={{ marginTop: "20px" }}>
          Voltar
        </button>
      </Link>
    </div>
  );
}
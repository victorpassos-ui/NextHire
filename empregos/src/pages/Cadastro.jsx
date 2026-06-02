import { useState } from "react";

export default function Cadastro() {

  const [form, setForm] = useState({

    nome_completo: "",
    cpf: "",
    email: "",
    telefone: "",
    senha: ""

  });

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  async function cadastrar(e) {

    e.preventDefault();

    const response = await fetch("http://localhost:3001/cadastro", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(form)

    });

    const data = await response.json();

    alert(data.mensagem);

  }

  return (

    <div className="container">

      <h1>📝 Cadastro</h1>

      <form onSubmit={cadastrar} className="job-card">

        <input
          type="text"
          name="nome_completo"
          placeholder="Nome completo"
          value={form.nome_completo}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={form.cpf}
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
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Cadastrar
        </button>

      </form>

    </div>

  );
}
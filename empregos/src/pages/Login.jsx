import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    senha: ""
  });

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  async function entrar(e) {

    e.preventDefault();

    const response = await fetch("http://localhost:3001/login", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(form)

    });

    const data = await response.json();

    if (data.sucesso) {

      navigate("/vagas");

    } else {

      alert(data.mensagem);

    }

  }

  return (

    <div className="container">

      <h1>🔐 Login</h1>

      <form onSubmit={entrar} className="job-card">

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
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
          Entrar
        </button>

      </form>

    </div>

  );
}
import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === Number(id));

  if (!job) {
    return <p className="container">Vaga não encontrada</p>;
  }

  return (
    <div className="container">
      <h1>{job.titulo}</h1>
      <p className="sub">{job.empresa} • {job.cidade}</p>

      <div className="job-card">
        <p><strong>💰 Salário:</strong> {job.salario}</p>

        <p><strong>📄 Descrição:</strong><br />
          {job.descricao}
        </p>

        <p><strong>✅ Requisitos:</strong><br />
          {job.requisitos}
        </p>

        <Link to={`/candidatar/${job.id}`}>
          <button style={{ marginTop: "15px" }}>
            Candidatar-se
          </button>
        </Link>
      </div>

      <Link to="/">
        <button style={{ marginTop: "20px" }}>Voltar</button>
      </Link>
    </div>
  );
}
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.titulo}</h3>
      <p><strong>{job.empresa}</strong></p>
      <p>{job.cidade}</p>

      <div className="badge">Presencial</div>

      <Link to={`/vaga/${job.id}`}>
        <button>Ver vaga</button>
      </Link>
    </div>
  );
}
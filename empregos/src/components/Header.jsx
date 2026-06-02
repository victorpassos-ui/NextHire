import { Link } from "react-router-dom";

export default function Header() {
  return (

    <div className="header">

      <h2>💼 VagasLocais</h2>

      <nav className="nav-links">

        <Link to="/">Início</Link>

        <Link to="/vagas">Vagas</Link>

        <Link to="/empresas">Empresas</Link>

      </nav>

    </div>

  );
}
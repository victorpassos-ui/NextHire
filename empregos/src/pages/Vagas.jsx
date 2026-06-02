import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";

export default function Vagas() {

  const [jobs, setJobs] = useState([]);
  const [todasVagas, setTodasVagas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {

    fetch("http://localhost:3001/vagas")
      .then((response) => response.json())
      .then((data) => {

        const vagasFormatadas = data.map((vaga) => ({
          id: vaga.id_vaga,
          titulo: vaga.titulo_vaga,
          empresa: vaga.nome_fantasia,
          cidade: "Jardim Nova Esperança",
          salario: `R$ ${vaga.salario}`,
          descricao: vaga.descricao
        }));

        setJobs(vagasFormatadas);
        setTodasVagas(vagasFormatadas);
        setCarregando(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar vagas:", error);
        setCarregando(false);
      });

  }, []);

  function buscar(termo) {

    const texto = termo.toLowerCase().trim();

    if (texto === "") {
      setJobs(todasVagas);
      return;
    }

    const vagasFiltradas = todasVagas.filter((vaga) =>
      vaga.titulo.toLowerCase().includes(texto) ||
      vaga.empresa.toLowerCase().includes(texto) ||
      vaga.descricao.toLowerCase().includes(texto)
    );

    setJobs(vagasFiltradas);
  }

  return (
    <div className="container">

      <h1>📋 Todas as Vagas</h1>

      <p className="sub">
        Confira todas as oportunidades disponíveis no bairro Jardim Nova Esperança
      </p>

      <SearchBar onSearch={buscar} />

      <p className="sub">
        {jobs.length} vaga(s) encontrada(s)
      </p>

      {carregando && (
        <p>Carregando vagas...</p>
      )}

      {!carregando && jobs.length === 0 && (
        <p>Nenhuma vaga encontrada.</p>
      )}

      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}

    </div>
  );
}
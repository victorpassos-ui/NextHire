import { Link } from "react-router-dom";

export default function Home() {

  return (

    <div className="home-page">

      <section className="hero-banner">

        <div className="hero-left">

          <span className="hero-tag">
            💼 Plataforma de Empregos Locais
          </span>

          <h1>
            Conectando talentos às melhores oportunidades da região
          </h1>

          <p>
            A <strong>VagasLocais</strong> é uma plataforma desenvolvida para
            aproximar profissionais e empresas do bairro Jardim Nova Esperança,
            facilitando o acesso a oportunidades de trabalho de forma rápida,
            prática e segura. Nossa missão é fortalecer o mercado local,
            impulsionar carreiras e ajudar empresas a encontrarem os
            candidatos ideais.
          </p>

          <div className="hero-buttons">

            <Link to="/login">
              <button className="primary-btn">
                Entrar na Plataforma
              </button>
            </Link>

            <Link to="/cadastro">
              <button className="secondary-btn">
                Criar Conta
              </button>
            </Link>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-box">
            <h2>🚀 Oportunidades Reais</h2>

            <p>
              Acesse vagas divulgadas por empresas parceiras e encontre
              oportunidades próximas da sua região.
            </p>
          </div>

          <div className="hero-box">
            <h2>🏢 Empresas Locais</h2>

            <p>
              Conectamos candidatos a empresas da comunidade,
              fortalecendo a economia local e gerando novas oportunidades.
            </p>
          </div>

          <div className="hero-box">
            <h2>⚡ Processo Simplificado</h2>

            <p>
              Pesquise vagas, visualize detalhes e envie sua candidatura
              de forma rápida e intuitiva.
            </p>
          </div>

        </div>

      </section>

      <section className="about-section">

        <div className="about-card">

          <h2>📌 Quem Somos</h2>

          <p>
            A VagasLocais nasceu com o propósito de facilitar a conexão
            entre empresas e profissionais da região. Nossa plataforma
            centraliza oportunidades de emprego em um único ambiente,
            tornando o processo de busca e contratação mais eficiente.
          </p>

        </div>

        <div className="about-card">

          <h2>🎯 Nossa Missão</h2>

          <p>
            Promover o desenvolvimento profissional dos moradores e
            auxiliar empresas na divulgação de oportunidades, contribuindo
            para o crescimento econômico e social da comunidade.
          </p>

        </div>

        <div className="about-card">

          <h2>💡 Recursos da Plataforma</h2>

          <p>
            ✔ Cadastro de usuários<br /><br />
            ✔ Login seguro<br /><br />
            ✔ Consulta de vagas disponíveis<br /><br />
            ✔ Empresas parceiras cadastradas<br /><br />
            ✔ Processo simplificado de candidatura<br /><br />
            ✔ Interface moderna e intuitiva
          </p>

        </div>

      </section>

    </div>

  );

}
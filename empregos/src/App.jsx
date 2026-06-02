import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Apply from "./pages/Apply";
import Vagas from "./pages/Vagas";
import Empresas from "./pages/Empresas";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {

  return (

    <>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/vaga/:id" element={<JobDetails />} />

        <Route path="/candidatar/:id" element={<Apply />} />

        <Route path="/vagas" element={<Vagas />} />

        <Route path="/empresas" element={<Empresas />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastro" element={<Cadastro />} />

      </Routes>

      <Footer />

    </>

  );

}

export default App;
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Apply from "./pages/Apply";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vaga/:id" element={<JobDetails />} />
        <Route path="/candidatar/:id" element={<Apply />} />
      </Routes>
    </>
  );
}

export default App;
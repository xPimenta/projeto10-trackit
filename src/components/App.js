import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./Header";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
// import Sessions from "./Sessions";
// import Seat from "./Seat";
// import Sucess  from "./Sucess"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos />} />
        {/* <Route path="/sessoes/:movieId" element={<Sessions />} />
        <Route path="/assentos/:sessionId" element={<Seat />} />
        <Route path="/sucesso/" element={<Sucess />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

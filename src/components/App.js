import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import Historico from "./Historico";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login salvarToken={(token) => setToken(token)}/>} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos token={token}/>} />
        <Route path="/historico" element={<Historico token={token}/>} />
        {/* <Route path="/sessoes/:movieId" element={<Sessions />} />
        <Route path="/assentos/:sessionId" element={<Seat />} />
        <Route path="/sucesso/" element={<Sucess />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

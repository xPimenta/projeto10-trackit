import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import UserImg from "./contexts/UserImg";

import Login from "./Login";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import Historico from "./Historico";
import Today from "./Today";
import CheckedHabitsValue from "./contexts/CheckedHabitsValue";

export default function App() {
  const [token, setToken] = useState([]);
  const [img, setImg] = useState("");
  const [checkedHabitsValue, setCheckedHabitsValue] = useState(0);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <UserImg.Provider value={{ img, setImg }}>
        <CheckedHabitsValue.Provider value={{ checkedHabitsValue, setCheckedHabitsValue }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/habitos" element={<Habitos />} />
              <Route path="/historico" element={<Historico />} />
              <Route path="/hoje" element={<Today />} />
            </Routes>
          </BrowserRouter>
        </CheckedHabitsValue.Provider>
      </UserImg.Provider>
    </UserContext.Provider>
  );
}

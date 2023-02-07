import "./services/firebase.js";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Buscador from "./components/Buscador";

import Register from "./components/Registertudent";
import ViewStundents from "./components/ViewStuden.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/Students"} />} />
          <Route path="/Students" element={<ViewStundents />} />

          <Route path="/Buscador" element={<Buscador />} />
          <Route path="/Register_student" element={<Register />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

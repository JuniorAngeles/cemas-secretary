import "./services/firebase.js";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Buscador from "./components/Buscador";
import Register from "./components/Registertudent";
import ViewStundents from "./components/ViewStuden.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <br />
        <br />
        <br />
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

import "./services/firebase.js";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Register from "./components/Registertudent";
import ViewStundents from "./components/ViewStuden.jsx";
import Header from "./components/Header.jsx";
import { Login } from "./components/Login.jsx";

function App({ isAuthenticated }) {
  return (
    <>
      <HashRouter>
        <Header />
        <br />
        <br />
        <br />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/Students" element={<ViewStundents />} />
          <Route path="/Register_student" element={<Register />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

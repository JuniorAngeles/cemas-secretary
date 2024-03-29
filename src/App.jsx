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

import { Login } from "./components/Login.jsx";
import Admin from "./user/admin.jsx";
import User from "./user/user.jsx";
import Header from "./components/HeaderAdmin.jsx";
import AboutUser from "./components/AboutUser.jsx";

// renderizar la aplicación
function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/Students" element={<ViewStundents />} />
          <Route path="/Register_student" element={<Register />} />
          <Route path="/AdminCemas" element={<Admin />} />
          <Route path="/Cemas.com" element={<User />} />
          <Route path="/AboutUser" element={<AboutUser />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

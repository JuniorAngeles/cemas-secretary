import { saveArchivos } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    e.preventDefault();
    const nombre = formData.get("name");
    const apellido = formData.get("lastName");
    const cedula = formData.get("id");
    const nMadre = formData.get("name_madre");
    const nPadre = formData.get("name_padre");
    const idPadre = formData.get("idPadre");
    const idMadre = formData.get("idMadre");

    const Objet = {
      nombre,
      apellido,
      cedula,
      nMadre,
      nPadre,
      idPadre,
      idMadre,
    };
    // console.log(Objet);
    saveArchivos(Objet)
      .then(navigate("/Students"))
      .then(alert("se agrego el estudiante"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Nombre Completo del estudiante</label>
        <input type="text" name="name" id="name" required />
        <label> Apellido</label>
        <input type="text" name="lastName" id="lastName" required />
        <label>Documento de identidad del estudiante(opcional)</label>
        <input type="text" name="id" id="id" />
        <label>Nombre completo de la madre</label>
        <input type="text" name="name_madre" id="name_madre" required />
        <label>Nombre completo del Padre</label>
        <input type="text" name="name_padre" id="name_padre" required />
        <label>Documento de identidad del Padre</label>
        <input type="text" name="idPadre" id="idPadre" required />
        <label>Documento de identidad de la Madre</label>
        <input type="text" name="idMadre" id="idMadre" required />

        <button>enviar</button>
      </form>
    </div>
  );
}

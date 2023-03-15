import { saveArchivos } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useState } from "react";
import { uploaFiles, getArchivo } from "../services/firebase";
import { doc } from "firebase/firestore";

export default function Register() {
  const [file, setFile] = useState(null);
  const [urlImg, seturlImg] = useState("");

  const navigate = useNavigate();

  // console.log(file);

  // funcion para enviar los datos
  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);

    e.preventDefault();
    // envia el documento a storage
    const result = await uploaFiles(file);
    // obtiene la referencia del documento
    seturlImg(result);
    // console.log(urlImg);

    const nombre = formData.get("name");
    const apellido = formData.get("lastName");
    const cedula = formData.get("id");
    const nMadre = formData.get("name_madre");
    const nPadre = formData.get("name_padre");
    const idPadre = formData.get("idPadre");
    const idMadre = formData.get("idMadre");
    const img = result;

    // encarga de guardar los datos
    const newObj = {
      nombre,
      apellido,
      cedula,
      nMadre,
      nPadre,
      idPadre,
      idMadre,
      img,
    };
    // envia datos a firestore
    await saveArchivos(newObj)
      .then(
        swal(
          "Registro Exitoso",
          "Gracias por registrarte, Espera nuestro llamado",
          "success"
        )
      )
      .then(navigate("/"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Nombre Completo del estudiante</label>
        <input type="text" name="name" id="name" />
        <label> Apellido</label>
        <input type="text" name="lastName" id="lastName" />
        <label>Documento de identidad del estudiante(opcional)</label>
        <input type="text" name="id" id="id" />
        <label>Nombre completo de la madre</label>
        <input type="text" name="name_madre" id="name_madre" />
        <label>Nombre completo del Padre</label>
        <input type="text" name="name_padre" id="name_padre" />
        <label>Documento de identidad del Padre</label>
        <input type="text" name="idPadre" id="idPadre" />
        <label>Documento de identidad de la Madre</label>
        <input type="text" name="idMadre" id="idMadre" />

        <input
          type="file"
          name=""
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button>enviar</button>
      </form>
    </div>
  );
}

export default function Student({ student }) {
  return (
    <div>
      <h1>{student.nombre}</h1>
      <h1>{student.apellido}</h1>
      <h1>{student.cedula}</h1>
      <h1>{student.nMadre}</h1>
      <h1>{student.nPadre}</h1>
      <h1>{student.idPadre}</h1>
      <h1>{student.idMadre}</h1>
      <h1>**************************</h1>
    </div>
  );
}

import { useEffect, useState, useMemo } from "react";
import { Busqueda } from "./Busqueda";
import { traerDatos } from "../services/firebase";
import Student from "./Student";

export function ViewBusqueda() {
  const [users, setUsers] = useState(traerDatos);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [query, setQuery] = useState("");

  useEffect(() => {
    traerDatos().then(setUsers);
    if (users) {
      const result = Busqueda(users, query);
      setFilteredUsers(result);
    }
  }, [query]);

  // useMemo(() => {
  //   if (users) {
  //     const result = Busqueda(users, query);
  //     setFilteredUsers(result);
  //   }
  // }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onBlur={(event) => setQuery(event.target.value)}
      />
      {filteredUsers.map((student) => (
        <Student Student key={student.id} student={student} />
      ))}
    </div>
  );
}

export default ViewBusqueda;

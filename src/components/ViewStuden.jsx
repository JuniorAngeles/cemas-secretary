import { useEffect, useState } from "react";
import { traerDatos } from "../services/firebase";
import Student from "./Student";

export default function ViewStundents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    traerDatos().then(setData);
    // console.log(data);
  }, []);

  if (!data) {
    return <h4>Loading...</h4>;
  }
  return (
    <>
      <div>
        {data.map((student) => {
          return <Student key={student.id} student={student} />;
        })}
      </div>
    </>
  );
}

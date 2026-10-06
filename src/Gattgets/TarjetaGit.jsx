import { useState, useEffect } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/SlinkAlex/repos")
      .then(respuesta => respuesta.json())
      .then(datos => {
        setUsuarios(datos);
        setCargando(false);
      });
  }, []); 

  if (cargando) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
       {repositorio.map(repositorio => (
        <div>
          <h2 key={repositorio.id}> {repositorio.name} </h2>
          <p >{repositorio.url}</p>
        </div>
      ))}
    </div>
  );
}

export default TarjetaGit;
import { useState, useEffect } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

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
      {usuario.map(u => (
        <div>
            <h2 key= {u.id}>{u.name}</h2>
            <p>{u.url}</p>
        </div>
      ))}
    </div>
  );
}

export default Listausuarios;
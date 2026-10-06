import React from 'react';
import Hero from "./Gattgets/Hero.jsx";
import Footer from "./Gattgets/Footer.jsx";

 //import Boton from "./Gattgets/Boton.jsx";
 //import Notificaciones from "./Gattgets/Notificaciones.jsx";
// import Like from "/Gattgets/Like.jsx";

function App() {
  return (
    // Recuerda que en JSX solo podemos retornar UN elemento padre. 
    // Usaremos un "Fragment" vacío <> </> si no queremos un div innecesario.
    // https://github.com/Ivxnn008/account
    // 

    <div>
      <Hero nombre="Ivan Grecia"
      rol="Desarrollador Frotnend">
      </Hero>
      <main style={{ padding: '20px' }}>
        <h2>Lista de Usuarios</h2>  
      </main>
      

      <Footer nombre="Ivan Garcia"></Footer>      

    </div>
  );
}

export default App;

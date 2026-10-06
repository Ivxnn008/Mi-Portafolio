//import { useState } from 'react';

function Saludo() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            {isLoggedIn ? (
                <h1>¡Bienvenido de vuelta!</h1>
            ) : (
                <p>Por favor, inicia sesión para continuar.</p>
            )}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}
            </button>
        </div>
    );
}

//export default Saludo;
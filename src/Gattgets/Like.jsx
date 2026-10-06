//import {useState} from 'react';

function Like() {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div>
            {isLiked ? (<h2> Te gusta!</h2>) : (<h2> Dar me gusta ? </h2>) }
            {isLiked ? (
                <button onClick={() => setIsLiked(false)}>Me gusta</button>
            ) : (
                <button onClick={() => setIsLiked(true)}>Me gusta</button>
            )}
        </div>
    );
}
//export default Like;
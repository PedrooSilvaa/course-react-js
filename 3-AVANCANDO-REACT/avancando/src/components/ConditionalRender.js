import React, { useState } from 'react'

const ConditionalRender = () => {

    const [x] = useState(false);

    const [name, setName] = useState("Pedro");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {/*Jeito de fazer um if em jsx */}
            {x && <p>Se x for true, sim</p>}
            {!x && <p>Agora o x é falso</p>}
        
        <h1>IF ternário</h1>
            {name === "João" ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
            <button onClick={() => setName("João")}>Mudar nome</button>
        </div>
        
    )
}

export default ConditionalRender
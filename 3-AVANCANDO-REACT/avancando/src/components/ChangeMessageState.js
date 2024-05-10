import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const msg = ["Oi", "Olá", "Bom dia"]
return (
    <div>
        <button onClick={() => {handleMessage(msg[0])}}>1</button>
        <button onClick={() => {handleMessage(msg[1])}}>2</button>
        <button onClick={() => {handleMessage(msg[2])}}>3</button>
    </div>
)
}

export default ChangeMessageState
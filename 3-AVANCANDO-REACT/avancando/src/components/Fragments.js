import React from 'react'

{/* Sem uma tag pai */}
const Fragments = ({fragmentText}) => {
    return (
        <>
            <h2>Primeiro titulo</h2>
            <h2>Segundo titulo</h2>
            <h2>{fragmentText}</h2>
        </>
    )
}

export default Fragments
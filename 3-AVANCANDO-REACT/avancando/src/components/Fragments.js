import React from 'react'

const Fragments = ({fragmentText}) => {
    return (
        <>
        {/* Sem uma tag pai */}
            <h2>Primeiro titulo</h2>
            <h2>Segundo titulo</h2>
            <h2>{fragmentText}</h2>
        </>
    )
}

export default Fragments
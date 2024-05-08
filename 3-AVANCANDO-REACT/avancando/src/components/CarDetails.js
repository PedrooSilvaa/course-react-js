import React from 'react'

const CarDetails = ({brand, km, color}) => {
    return (
        <div>
            <h1>Detalhes do carro</h1>
            <li>Marca: {brand}</li>
            <li>KM : {km}</li>
            <li>Color : {color}</li>
        </div>
    )
}

export default CarDetails
import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => {
    return (
        <div>
            <h1>Detalhes do carro</h1>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM : {km}</li>
                <li>Color : {color}</li>
            </ul>
            {newCar && <p>Esse carro é novo!</p>}
        </div>
    )
}

export default CarDetails
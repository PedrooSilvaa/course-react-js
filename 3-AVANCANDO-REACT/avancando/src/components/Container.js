import React from 'react'

{/*pra aceitar q conteudos sejam adicionados dentro de um componete precisa adicionar o children */}

const Container = ( {children, myValue} ) => {
    return (
    <div>
        <h1>Este é o titulo do Container</h1>
        {children}
        <h5>{myValue}</h5>
    </div>
    )
}

export default Container
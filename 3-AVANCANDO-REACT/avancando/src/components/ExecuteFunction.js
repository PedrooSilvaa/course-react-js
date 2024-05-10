import React from 'react'

const ExecuteFunction = ({MyFunction}) => {
  return (
    <div>
        <button onClick={MyFunction}>Clique para executar</button>
    </div>
  )
}

export default ExecuteFunction
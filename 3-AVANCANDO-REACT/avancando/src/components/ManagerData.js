import {useState} from 'react'

const ManagerData = () => {

    {/*com variavel o valor não re-renderiza após mudança */}
    let someData = 10;
    console.log(someData);

    {/*dessa forma o valor re-renderiza após mudança */}
    const [number, setNumber] = useState(15);
    console.log(number)

    return (
        <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData=15)}>Mudar Variavel</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => (setNumber(35))}>Mudar o State</button>
        </div>
        </div>
    )
}

export default ManagerData
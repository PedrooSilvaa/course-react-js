import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "Maria", "Josias"])

    const [users] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 12222, name: "João", age: 31},
        {id: 13333, name: "Pedro", age: 31}
    ])

    return (
        <div>
            <ul>
                {
                    list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))
                    }
            </ul>

            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default ListRender

/*
Por erro da propriedade key foi preciso colocar a chave com o numero do index
mas o certo e que tem q ser feito é com uma chave unica como apresentado no exemplo de users
*/
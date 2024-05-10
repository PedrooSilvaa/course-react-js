import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "Maria", "Josias"])

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "João", age: 31},
        {id: 3, name: "Pedro", age: 31}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            /* aqui oq for igual ele deleta e oq for diferente ele mantém */
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

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
            <button onClick={deleteRandom}>Delete por Random</button>

        </div>
    )
}

export default ListRender

/*
Por erro da propriedade key foi preciso colocar a chave com o numero do index
mas o certo e que tem q ser feito é com uma chave unica como apresentado no exemplo de users
*/
import './MyForm.css'
import {useState} from "react"
    const MyForm = ({user}) => {
    // 6 - Controlled inputs
    // 3 - Gerencimaento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e) => {
        setName(e.target.value)
    }

    // console.log(name)
    // console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role)

    // 7 - Limpando form
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

return (
    <div>
        {/* 1 - Envio de form */}
        {/* 1 - Criaçao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" 
                name="name" 
                placeholder="Digite seu nome" 
                onChange={handleName}
                value={name}/>
            </div>
            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* 4 - Simplificacao de manipulção de dados inline */}
                <input type="email" 
                name="email" 
                placeholder="Digite o seu e-mail" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </label>
            {/* 8 - textarea */}
            <textarea
                name="bio" 
                placeholder="Descrição do usuário" 
                onChange={(e) => setBio(e.target.value)}
                value={bio}/>
                <label>
                    <span>Função do sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuario</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
)
}

export default MyForm
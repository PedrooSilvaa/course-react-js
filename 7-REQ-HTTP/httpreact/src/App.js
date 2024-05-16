import {useEffect, useState} from 'react';

import './App.css';

// 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([])

  // 4 - custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url);

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [id, setId] = useState("")

  // 1 - Resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }
  //   fetchData();
  // })

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    // const res = await fetch (url, {
    //   method: "POST",
    //   headers: {
    //     // qual o tipo de conteudo estamos manipulando
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // // 3 - carregamento dinamico
    // const addProducts = await res.json

    // setProducts((prevProducts) => [...prevProducts, addProducts]);

    httpConfig(product, "POST")

    setName("")
    setPrice("")

  }

  const handleDelete = async (id) => {
    
    httpConfig(id, "DELETE");

  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}

      {error && <p>{error}</p>}

      {!error &&  (
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$ {product.price}<button onClick={() => handleDelete(product.id)}>Deletar</button></li>
        ))}
      </ul>
    )}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" 
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}/>
          </label>

          <label>
            Price:
            <input type="number" 
            value={price}
            name='price'
            onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* 7 - state loading no post  */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;

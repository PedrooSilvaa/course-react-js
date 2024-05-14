import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from "react"
import Title from './components/Title';

function App() {
  
  const n = 15;
  const [nome] = useState("Pedro");
  const redTitle = true;

  return (
    <div className="App">
    {/* CSS global */}
    <h1>React com CSS</h1>
    <p>Este paragrafo é do App.js</p>
    {/* CSS do componente */}
    <MyComponent/>
    {/* CSS inline */}
    <p style={{color: "Magenta", padding: "25px", borderTop: "2px solid red"}}>
    Este elemento foi estilizado de forma inline
    </p>
    <p style={{color: "Magenta", padding: "25px", borderTop: "2px solid red"}}>
    Este elemento foi estilizado de forma inline
    </p>
    {/* CSS inline dinamico */}
    <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>
      CSS dinâmico
    </h2>
    <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>
      CSS dinâmico
    </h2>
    <h2 style={nome === "Pedro" ? {color: "green", backgroundColor: "black"} : null}>
      Teste nome
    </h2>
    <h2 style={nome === "Amanda" ? {color: "green", backgroundColor: "black"} : null}>
      Teste nome
    </h2>
    {/* Classe dinamica */}
    <h2 className={redTitle ? "red-title" : "title"}>
      Esse titúlo vai ter classe dinâmica
    </h2>
    <h2 className={!redTitle ? "red-title" : "title"}>
      Esse titúlo vai ter classe dinâmica
    </h2>
    {/* CSS module */}
    <Title/>
    </div>
  );
}

export default App;

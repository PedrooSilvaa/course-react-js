import Img2 from "./assets/img2.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
      <img src="/img1.jpeg" alt="Passarinho" />
      </div>

      {/* Imagem em assets */}
    <div>
      <img src={Img2} alt="Leão" />
    </div>

    </div>
  );
}

export default App;

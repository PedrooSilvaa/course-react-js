import ManagerData from "./components/ManagerData";
import Img2 from "./assets/img2.jpg"
import './App.css';
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";

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

    <ManagerData />
    <ListRender />
    <ConditionalRender />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  return (
    <div className="App">
      <h1>Detalhes de carros - Challenge</h1>
      <CarDetails brand="Fiat" color="Cinza" km="1000"/>
      <CarDetails brand="Ford" color="Black" km="2999"/>
      <CarDetails brand="BYD" color="Branco" km="4003"/>
    </div>
  );
}

export default App;

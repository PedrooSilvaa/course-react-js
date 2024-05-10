import ManagerData from "./components/ManagerData";
import Img2 from "./assets/img2.jpg"
import './App.css';
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermleha", km: 0, newCar: true},
    {id: 1, brand: "Ford", color: "Cinza", km: 1000, newCar: false},
    {id: 1, brand: "BYD", color: "Branca", km: 2989, newCar: false}
  ]

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
    {/* props */}
    <ShowUserName  name="Pedro" />
    {/* destructuring */}
    <CarDetails brand="FIAT" km={1000} color="Cinza" newCar={false} />
    {/* reapoveitando */}
    <CarDetails brand="Kia" km={0} color="Cinza" newCar={true} />
    <CarDetails brand="Ferrari" km={1000} color="Cinza"  newCar={false}/>
    {/* loop */}
    {cars.map((car) => (
      <CarDetails 
        brand={car.brand} 
        color={car.color} 
        km={car.km}
        newCar={car.newCar}
      />
    ))} 
    {/* Fragments */}
    <Fragments fragmentText="teste"/>
    {/* Container */}
    <Container myValue="Testing 1">
      <p>Este é o texto do container</p>
    </Container>
    <Container myValue="Testing 2">
      <p>Este é o texto do container</p>
    </Container>
    </div>
  );
}

export default App;

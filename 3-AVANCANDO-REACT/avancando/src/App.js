import ManagerData from "./components/ManagerData";
import Img2 from "./assets/img2.jpg"
import './App.css';
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermleha", km: 0, newCar: true},
    {id: 2, brand: "Ford", color: "Cinza", km: 1000, newCar: false},
    {id: 3, brand: "BYD", color: "Branca", km: 2989, newCar: false}
  ]

  const Users = [
    {id: 1, name: "Pedro", job: "Programador", age: 19},
    {id: 2, name: "Carol", job: "Professora", age: 27},
    {id: 3, name: "Paulo", job: "Estudante", age: 13}
  ]

  function showMessage (){
      console.log("Função do pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

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
        key={car.id}
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
    {/* executar funcao */}
    <ExecuteFunction MyFunction={showMessage}/>

    {/* state lift */}
    <Message msg={message}/>
    <ChangeMessageState handleMessage={handleMessage} />

    {/* changelle */}

    {Users.map((user) => (
      <UserDetails 
      key={user.id}
      name={user.name}
      age={user.age}
      job={user.job}
      />
    ))}
    </div>
  );
}

export default App;

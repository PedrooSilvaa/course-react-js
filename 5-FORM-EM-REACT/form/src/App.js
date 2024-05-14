import './App.css';
import MyForm from './component/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Form</h2>
      <MyForm user={{name:"Josias", email:"josias@gmail.com", bio:"Eu sou advogado", role:"admin"}}/>
    </div>
  );
}

export default App;

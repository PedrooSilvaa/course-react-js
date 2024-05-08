import FirstComponent from './components/FirstComponents';
import TemplateExpression from './components/TemplateExpressions';
import Events from './components/Events';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
    </div>
  );
}

export default App;

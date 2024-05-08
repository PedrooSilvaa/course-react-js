import FirstComponent from './components/FirstComponents';
import TemplateExpression from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
      <Challenge />
    </div>
  );
}

export default App;

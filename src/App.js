import './App.css';
import BasicUseEffect from "./components/BasicUseEffect"
import UnaVariable from './components/UnaVariable';
import UnaVezYRenderiza from './components/UnaVezYRenderiza';
import Controlar from "./components/Controlar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React useEffect()
        </h1>
      </header>
      <BasicUseEffect />
      <UnaVezYRenderiza />
      <UnaVariable />
      <Controlar />
    </div>
  );
}

export default App;

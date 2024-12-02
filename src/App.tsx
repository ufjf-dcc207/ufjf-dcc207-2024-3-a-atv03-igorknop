import "./App.css";
import Animal from "./Animal";

function App() {
  return (
    <div className="app">
      <Animal icone="🦁" nome = "Leão" peso = {-1} extincao/>
      <Animal icone="🦒" nome = "Girafa" peso = {1200} extincao/>
      <Animal icone="🦜" nome = "Papagaio" peso = {0.120} />
    </div>
  );
}

export default App;

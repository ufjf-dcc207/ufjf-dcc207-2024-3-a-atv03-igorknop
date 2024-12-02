import "./App.css";
import Animal from "./Animal";

function App() {
  return (
    <div className="app">
      <Animal icone="🦁" nome = "Leão" peso = {-1} extincao={false}/>
    </div>
  );
}

export default App;

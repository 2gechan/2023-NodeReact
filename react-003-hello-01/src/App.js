import logo from "./logo.svg";
import "./App.css";
import CalcMain from "./comps/CalcMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CalcMain />
    </div>
  );
}

export default App;

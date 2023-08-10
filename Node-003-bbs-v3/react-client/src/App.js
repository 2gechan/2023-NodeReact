import logo from "./logo.svg";
import "./css/App.css";
import { useState, useEffect } from "react";
import { hello } from "./modules/FetchModules";
import BBsMain from "./comps/BBsMain";
import { BBsContextProvider } from "./provide/BBsProvider";

function App() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title ? title : "React BBS Project"}</p>
        <div>
          <input placeholder="아무거나 입력하기"></input>
        </div>
      </header>
      <BBsContextProvider>
        <BBsMain />
      </BBsContextProvider>
    </div>
  );
}

export default App;

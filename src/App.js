import "./App.css";
import NavBar from "./components/navbar.js";
import ducky from "./duck.png";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div>
        <div id="description">
          <h1>
            <img id="duck" src={ducky} alt="A Rubber Duck" />
            <div id="name">Taven Tran</div> Software Engineer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;

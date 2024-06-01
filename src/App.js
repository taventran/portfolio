import "./App.css";
import NavBar from "./components/navbar.js";
import ducky from "./duck.png";
import Experience from "./components/experience";


function App() {
  return (
    <div className="App">
      <div id="description">
        <img id="duck" src={ducky} alt="rubber duck" />
        <h1>Hey, I'm Taven!</h1>
        <h2>Fullstack Software Engineer</h2>
      </div>
      <div id="buttons">
        <button className="box">Experience</button>
        <button className="box">Projects</button>
        <button className="box">Contact</button>
      </div>
      <Experience />
    </div>
  );
}

export default App;

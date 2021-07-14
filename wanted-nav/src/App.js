import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import SlideBar from "./SlideBar";
import { useState } from "react";

function App() {
  const [isHover, setIsHover] = useState(false);
  const HandleMouseOver = (isHover) => {
    console.log(isHover);
    console.log(setIsHover);
    if (isHover == false) {
      setIsHover(!isHover);
    }
  };
  const OffHover = (isHover) => {
    console.log(isHover);
    console.log(setIsHover);
    if (isHover === true) {
      setIsHover(!isHover);
    }
  };

  return (
    <div className="App">
      <Header
        isHover={isHover}
        setIsHover={setIsHover}
        HandleMouseOver={HandleMouseOver}
      />
      <header className="App-header" onMouseEnter={() => OffHover(isHover)}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onMouseEnter={() => console.log("babo")}>메롱</button>
      </header>
    </div>
  );
}

export default App;

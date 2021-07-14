import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import SlideBar from "./SlideBar";
import { useState } from "react";

function App() {
  const [isHover, setIsHover] = useState(false);
  const handleMouseOn = (isHover) => {
    console.log(isHover);
    console.log(setIsHover);
    setIsHover(!isHover);
  };
  const handleMouseOff = (isHover) => {
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
        handleMouseOn={handleMouseOn}
        handleMouseOff={handleMouseOff}
      />
      <header
        className="App-header"
        onMouseEnter={() => handleMouseOff(isHover)}
      >
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
      </header>
    </div>
  );
}

export default App;

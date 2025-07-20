import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import HelloWorld from "hello_npm_pkg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <HelloWorld />
    </>
  );
}

export default App;

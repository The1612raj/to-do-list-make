import { useState } from "react";
import "./App.css";
import Header from "./assets/Header";
import Home from "./assets/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;

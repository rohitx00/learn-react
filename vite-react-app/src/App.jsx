import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card price="120" jacketName="Winter Jacket" />
      <Card price="150" jacketName="Classic black leather Jacket" />
    </>
  );
}

export default App;

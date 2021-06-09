import { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./main.scss";

function App() {
  const [click, setClick] = useState(false);

  return (
    <>
      <Navbar
        handleClick={click => setClick(!click)}
        click={click}
      />
      <MainContent click={click}/>
    </>
  );
}

export default App;
